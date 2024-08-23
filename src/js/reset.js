function resetScrollOnElement() {
    // Select the element with the class `animation__container`
    const scrollContainer = document.querySelector('.animation__container');

    // Check if the element exists
    if (!scrollContainer) {
        console.error('Element with class "animation__container" not found.');
        return;
    }

    // Add an event listener for the scroll event on the selected element
    scrollContainer.addEventListener('scroll', function() {
        // Get the scroll position and dimensions of the element
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const containerHeight = scrollContainer.clientHeight;

        // Check if the user is at the bottom of the element
        if (scrollTop + containerHeight >= scrollHeight - 1) {
            // Reset the scroll position to the top
            scrollContainer.scrollTop = 0;
            console.log('back to top')
        }
    });
}

// Call the function to activate the behavior
document.addEventListener('DOMContentLoaded', function() {
    resetScrollOnElement();
});
