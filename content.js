console.log('juejin extension works')


window.addEventListener('load', function() {
    const links = document.querySelectorAll('article a');
    links.forEach(link => {
        const { href } = link;
        if (href.startsWith('https://link.juejin.cn')) {
            link.href = decodeURIComponent(link.search.substr(8))
        }
    })
})