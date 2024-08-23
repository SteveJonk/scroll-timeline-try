// Prepare for the ugliest code ever, but hey, it was a hackathon project.

const resetScrollOnElement = () => {
    const scrollContainer = document.querySelector('.animation__container');

    if (!scrollContainer) {
        console.error('Element with class "animation__container" not found.');
        return;
    }

    let lastScrollTop = 0

    scrollContainer.addEventListener('scroll', function() {
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const containerHeight = scrollContainer.clientHeight;
        const scrollDirection = scrollTop >= lastScrollTop ? 'down' : 'up';
        lastScrollTop = scrollTop
        if (scrollTop + containerHeight >= scrollHeight && scrollDirection === 'down') {
            scrollContainer.scrollTop = 1;
        } else if (scrollTop <= 0 && scrollDirection === 'up') {
            scrollContainer.scrollTop = scrollHeight - containerHeight - 1;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    resetScrollOnElement();
});
