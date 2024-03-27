filter_none = function(button) {
    activate_button(button)
    const articles = document.querySelectorAll('article')
    articles.forEach(a => a.classList.remove('hidden'));
}

filter_all = function(button) {
    activate_button(button)
    const articles = document.querySelectorAll('article')
    articles.forEach(a => a.classList.add('hidden'));
}

filter_links = function(button) {
    filter_all();
    activate_button(button)
    const matching_titles = document.querySelectorAll('article .index.linklog');
    const matching_articles = Array.from(matching_titles).map(t => t.closest('article'));
    matching_articles.forEach(a => a.classList.remove('hidden'));
}

filter_posts = function(button) {
    filter_none();
    activate_button(button)
    const not_matching_titles = document.querySelectorAll('article .index.paintings, article .index.paintings-en');
    const not_matching_articles = Array.from(not_matching_titles).map(t => t.closest('article'));
    not_matching_articles.forEach(a => a.classList.add('hidden'));
}

filter_category = function(button, category) {
    filter_none();
    activate_button(button)
    const not_matching_titles = document.querySelectorAll('article .index:not(.' + category +')');
    const not_matching_articles = Array.from(not_matching_titles).map(t => t.closest('article'));
    not_matching_articles.forEach(a => a.classList.add('hidden'));
}

activate_button = function (button) {
    if (button) {
        const buttons = button.parentNode.querySelectorAll("button")
        buttons.forEach(b => b.classList.remove("active"))
        button.classList.add("active")
    }
}