const BREAKABLE_ELEMENTS = ["P", "STRONG", "EM", "BLOCKQUOTE", "A", "UL", "OL", "LI", "DIV"]
const ELEMENTS_TO_REMOVE_IF_EMPTY = ["LI"]
const CONTAINER_SELECTOR = '.paginated-article';

let unpaginatedDocument
let lastPaginationScrollOffset

document.addEventListener("DOMContentLoaded", function() {
    /** @type {Element} */
    const tmpContainer = document.querySelector(CONTAINER_SELECTOR)
    if (!tmpContainer) {
        return
    }
    
    fullWidthContainer = document.createElement("div")
    fullWidthContainer.classList.add("fullwidth-container")
    fullWidthContainer.innerHTML = tmpContainer.outerHTML;
    fullWidthContainer.appendChild(buildNavigation())
    tmpContainer.after(fullWidthContainer)
    tmpContainer.remove()
    const container = document.querySelector(CONTAINER_SELECTOR)
    
    unpaginatedDocument = container.innerHTML
    const observer = new ResizeObserver(throttle(updatePagination, 1000))
    observer.observe(container)

    // Keyboard control
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (["ArrowDown", "ArrowRight", " "].includes(key)) {
            pageForwardAction(container)
            event.preventDefault()
        }
        if (["ArrowUp", "ArrowLeft"].includes(key)) {
            pageBackAction(container)
            event.preventDefault()
        }
    }, false);
})

function throttle(f, delay) {
    let timer = 0
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => f.apply(this, args), delay)
    }
}

// window.resize callback function
function updatePagination() {
    let container = document.querySelector(CONTAINER_SELECTOR)
    container.classList.add("loading")
    container.classList.remove("ready")
    container.classList.remove("has-error")

    try {
        if (container.clientHeight < 300) {
            // Does not make sense on too small sizes
            throw new Error("View is too small for pagination")
        }

        // Remember last scroll position (relative to page number)
        lastPaginationScrollOffset = container.scrollLeft / container.scrollWidth
        container.innerHTML = buildPage(unpaginatedDocument, 1).outerHTML
        /** @type {Element} */
        let lastPageContent = container.querySelector(".page:last-child .page-content")
        spacer = document.createElement("div")
        spacer.classList.add("spacer")
        container.prepend(spacer)
        const pageHeight = lastPageContent.clientHeight
        const pageBottom = getBottomWithoutPaddingOrBorder(lastPageContent)
        let pageNumber = 2
        while (lastPageContent) {
            let newPageContent = splitNodeOnOverflow(
                pageHeight,
                pageBottom,
                lastPageContent
            )
            if (newPageContent !== null) {
                container.appendChild(buildPage(newPageContent, pageNumber))
                pageNumber++
            }
            lastPageContent = newPageContent
        }
        if (pageNumber % 2 === 0) {
            // Make sure there is an even number of pages
            container.appendChild(buildPage("", pageNumber))
        }
        spacer = document.createElement("div")
        spacer.classList.add("spacer")
        container.appendChild(spacer)
        // Go back to last reading position
        container.scrollLeft = lastPaginationScrollOffset * container.scrollWidth
        container.classList.add("ready")
    } catch (e) {
        console.warn(e)
        container.innerHTML = unpaginatedDocument
        container.classList.add("has-error")
    } finally {
        container.classList.remove("loading")
    }
}


function splitNodeOnOverflow(pageHeight, pageBottom, node) {
    let nodesForNextPage = []
    let foundFirstOverflow = false
    
    for (let child of Array.from(node.childNodes)) {
        if (foundFirstOverflow) {
            if (child.innerHTML && child.innerHTML.trim() === "") {
                continue
            }
            if (child.nodeName === "#text" && child.textContent.trim() === "") {
                continue
            }
            if (!BREAKABLE_ELEMENTS.includes(child.nodeName) && child.clientHeight >= pageHeight) {
                throw new Error("Element is too large for current pagination height: " + child.nodeName)
            }
            nodesForNextPage.push(child)
            if (nodesForNextPage.length === 1 && child.classList) {
                child.classList.add("first-on-page")
            }
            continue
        }
        let childBottom = getBottomWithoutPaddingOrBorder(child)
        if (childBottom > pageBottom) {
            foundFirstOverflow = true
            if (BREAKABLE_ELEMENTS.includes(child.nodeName)) {
                const originalChildText = child.textContent
                let innerSplitChild = splitNodeOnOverflow(pageHeight, pageBottom, child)
                if (innerSplitChild !== null) {
                    
                    nodesForNextPage.push(innerSplitChild)
                    if (nodesForNextPage.length === 1) {
                        innerSplitChild.classList.add("first-on-page")
                        innerSplitChild.classList.add("was-split")
                        child.classList.add("was-split")
                    }

                    if (['UL', 'OL'].includes(innerSplitChild.nodeName)) {   
                        if (innerSplitChild.querySelector(".was-split")) {
                            if (innerSplitChild.nodeName === 'OL') {
                                // Next page starts with next list item number
                                innerSplitChild.setAttribute("start", child.childElementCount + 1)
                            }
                        }
                        if (innerSplitChild.querySelector(".was-text-split")) {
                            if (innerSplitChild.nodeName === 'OL') {
                                // Text continues in same list item number
                                innerSplitChild.setAttribute("start", child.childElementCount)
                            }
                            innerSplitChild.classList.add("first-item-style-none")
                        } 
                    }

                }
                child.classList.add("last-on-page")
                if (originalChildText !== child.textContent && child.textContent.trim() === "") {
                    node.removeChild(child)
                }
            } else if (child.nodeName === "#text") {
                let textContentBeforeSplit = child.textContent
                let splitChild = splitTextNodeOnOverflow(pageBottom, child)
                if (splitChild !== null) {
                    if (splitChild.textContent === textContentBeforeSplit) {
                        // Entire text node must go to the next page
                        node.removeChild(child)
                    } else {
                        node.classList.add("was-text-split")
                    }
                    nodesForNextPage.push(splitChild)
                }
            } else {
                if (child.clientHeight >= pageHeight) {
                    throw new Error("Element is too large for current pagination height: " + child.nodeName)
                }
                nodesForNextPage.push(child)
                if (nodesForNextPage.length === 1) {
                    child.classList.add("first-on-page")
                }
                node.removeChild(child)
            }
        }
    }
    if (nodesForNextPage.length === 0) {
        console.warn("element has no moved child nodes", node)
        return null
    }
    let newNode = cloneNodeEmpty(node)
    for (let child of nodesForNextPage) {
        newNode.appendChild(child)
    }
    return newNode
}

function splitTextNodeOnOverflow(pageBottom, textNode) {
    let wordsForNextNode = []
    let foundFirstOverflow = false
    
    let completeTextContent = textNode.textContent
    if (completeTextContent.trim() === "") {
        console.warn("Text node is empty, cannot be splitted", textNode)
    }
    textNode.textContent = ""
    for (let word of completeTextContent.split(" ")) {
        if (foundFirstOverflow) {
            wordsForNextNode.push(word)
            continue
        }
        textNode.textContent += word
        let nodeBottom = getBottomWithoutPaddingOrBorder(textNode)
        if (nodeBottom > pageBottom) {
            foundFirstOverflow = true
            // Remove the word that caused overflow
            textNode.textContent = textNode.textContent.substring( 0, textNode.textContent.length - 1 - word.length )
            wordsForNextNode.push(word)
        } else {
            textNode.textContent += " "
        }
        firstWord = false
    }

    let newText = wordsForNextNode.join(" ")
    if (newText.trim().length === 0) {
        return null
    }
    return document.createTextNode(newText)
}

function cloneNodeEmpty(node) {
    let newNode = node.cloneNode()
    newNode.innerHTML = ""
    return newNode
}

function getBottom(node) {
    if (node instanceof Element) {
        return node.getBoundingClientRect().bottom
    } else if (node.nodeName === "#text") {
        let range = document.createRange()
        range.selectNode(node)
        let rect = range.getBoundingClientRect()
        range.detach() // frees up memory in older browsers
        return rect.bottom
    } else {
        return 0
    }
}

function getBottomWithoutPaddingOrBorder(node) {
    let bottom = getBottom(node)
    if (node instanceof Element) {
        let computed = getComputedStyle(node),
            padding = parseInt(computed.paddingBottom),
            border = parseInt(computed.borderBottomWidth)
      
        return bottom - padding - border
    }
    return bottom
}

function buildPage(content, pageNumber) {
    const page = document.createElement("div")
    page.classList.add("page")
    const pageContent = document.createElement("div")
    pageContent.classList.add("page-content")
    if (content instanceof Node) {
        pageContent.appendChild(content)
    } else {
        pageContent.innerHTML = content
    }
    const pageFooter = document.createElement("div")
    pageFooter.classList.add("page-footer")
    pageFooter.innerHTML = `<div class="page-number">${pageNumber}</div>`
    page.appendChild(pageContent)
    page.appendChild(pageFooter)
    return page
}

function buildNavigation() {
    const nav = document.createElement("nav")
    nav.classList.add("page-navigation")
    nav.innerHTML = `
    <button onclick="pageBackAction()" title="←" class="page-back"></button>
    <button onclick="pageForwardAction()" title="→" class="page-forward"></button>
    `
    return nav
}

function forceRepaint(node) {
    node.style.display='none';
    node.offsetHeight; // no need to store this anywhere, the reference is enough
    node.style.display='block';
}

function pageForwardAction(container) {
    if (!container) {
        container = document.querySelector(CONTAINER_SELECTOR)
    }
    if (Math.abs(container.scrollWidth - container.scrollLeft - container.clientWidth) <= 1) {
        // Already at last page, scroll down instead
        window.scrollTo({ top: container.clientTop + container.clientHeight, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: container.clientTop, behavior: 'smooth' });
        container.scrollTo({left: container.scrollLeft + container.clientWidth, behavior: 'smooth'});
    }
}
function pageBackAction(container) {
    if (!container) {
        container = document.querySelector(CONTAINER_SELECTOR)
    }
    window.scrollTo({ top: container.clientTop, behavior: 'smooth' });
    container.scrollTo({left: container.scrollLeft - container.clientWidth, behavior: 'smooth'});
}