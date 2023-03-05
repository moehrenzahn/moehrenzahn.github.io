const BREAKABLE_ELEMENTS = ["P", "STRONG", "EM", "BLOCKQUOTE", "A", "UL", "OL", "LI", "DIV"]

let unpaginatedDocument
let lastPaginationScrollOffset

document.addEventListener("DOMContentLoaded", function() {
    /** @type {Element} */
    let container = document.querySelector(".paginated-article")
    if (!container) {
        return
    }
    
    unpaginatedDocument = container.innerHTML
    updatePagination()
    const observer = new ResizeObserver(throttle(updatePagination, 1000))
    observer.observe(container)

    // Keyboard control
    document.addEventListener('keydown', function(event) {
        const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
        if (["ArrowDown", "ArrowRight", " "].includes(key)) {
            window.scrollTo({ top: container.clientTop, behavior: 'smooth' });
            container.scrollTo({left: container.scrollLeft + 400, behavior: 'smooth'});
            event.preventDefault()
        }
        if (["ArrowUp", "ArrowLeft"].includes(key)) {
            window.scrollTo({ top: container.clientTop, behavior: 'smooth' });
            container.scrollTo({left: container.scrollLeft - 400, behavior: 'smooth'});
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
    let container = document.querySelector(".paginated-article")
    
    container.classList.add("loading")
    container.classList.remove("has-error")

    setTimeout(function() {
        try {
            if (container.clientHeight < 300) {
                // Does not make sense on too small sizes
                throw new Error("View is too small for pagination")
            }

            // Remember last scroll position (relative to page number)
            lastPaginationScrollOffset = container.scrollLeft / container.scrollWidth
            container.innerHTML = "<div class='page'>"
                + unpaginatedDocument
                + "</div>"
            /** @type {Element} */
            let lastPage = container.querySelector(".page:last-child")
            while (lastPage) {
                let newPage = splitNodeOnOverflow(lastPage, lastPage)
                if (newPage !== null) {
                    container.appendChild(newPage)
                }
                lastPage = newPage
            }
            // Go back to last reading position
            container.scrollLeft = lastPaginationScrollOffset * container.scrollWidth
        } catch (e) {
            console.error(e)
            container.innerHTML = unpaginatedDocument
            container.classList.add("has-error")
        } finally {
            container.classList.remove("loading")
        }
    }, 0)
}


function splitNodeOnOverflow(paginationContainer, node) {
    let nodesForNextPage = []
    let foundFirstOverflow = false
    let containerBottom = getBottomWithoutPaddingOrBorder(paginationContainer) 
    
    for (let child of Array.from(node.childNodes)) {
        if (foundFirstOverflow) {
            if (child.innerHTML && child.innerHTML.trim() === "") {
                continue
            }
            if (child.nodeName === "#text" && child.textContent.trim() === "") {
                continue
            }
            if (!BREAKABLE_ELEMENTS.includes(child.nodeName) && child.clientHeight >= paginationContainer.clientHeight) {
                throw new Error("Element is too large for current pagination height: " + child.nodeName)
            }
            nodesForNextPage.push(child)
            if (nodesForNextPage.length === 1) {
                child.classList.add("first-on-page")
            }
            continue
        }
        let childBottom = getBottomWithoutPaddingOrBorder(child)
        if (childBottom > containerBottom) {
            foundFirstOverflow = true

            if (BREAKABLE_ELEMENTS.includes(child.nodeName)) {
                let innerSplitChild = splitNodeOnOverflow(paginationContainer, child)
                if (innerSplitChild !== null) {
                    nodesForNextPage.push(innerSplitChild)
                    if (nodesForNextPage.length === 1) {
                        innerSplitChild.classList.add("first-on-page")
                        child.classList.add("was-split")
                    }
                }
                child.classList.add("last-on-page")
            } else if (child.nodeName === "#text") {
                let splitChild = splitTextNodeOnOverflow(paginationContainer, child)
                if (splitChild !== null) {
                    nodesForNextPage.push(splitChild)
                }
            } else {
                if (child.clientHeight >= paginationContainer.clientHeight) {
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

function splitTextNodeOnOverflow(paginationContainer, textNode) {
    let wordsForNextNode = []
    let foundFirstOverflow = false
    let containerBottom = getBottomWithoutPaddingOrBorder(paginationContainer)
    
    let completeTextContent = textNode.textContent
    if (completeTextContent.trim() === "") {
        console.warn("Text node is empty, cannot be splitted", textNode)
    }
    textNode.textContent = ""
    let firstWord = true
    for (let word of completeTextContent.split(" ")) {
        if (foundFirstOverflow) {
            wordsForNextNode.push(word)
            continue
        }
        textNode.textContent += word
        let nodeBottom = getBottomWithoutPaddingOrBorder(textNode)
        if (nodeBottom > containerBottom) {
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

function forceRepaint(node) {
    node.style.display='none';
    node.offsetHeight; // no need to store this anywhere, the reference is enough
    node.style.display='block';
}