// JavaScript code to load more projects as the user scrolls
window.addEventListener('scroll', () => {
    const container = document.querySelector('.project-container');
    if (container.scrollHeight - container.scrollTop === container.clientHeight) {
        // Load more projects here (e.g., fetch data and append new project elements)
    }
});
