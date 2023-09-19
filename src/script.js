
// Function to trigger the animation when the page loads
function slideInSection() {
    const section = document.querySelector('.slide-in');
    section.style.transform = 'translateX(0)';
    section.style.opacity = '1';
}
// Call the function when the page loads
window.addEventListener('load', slideInSection);