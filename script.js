document.addEventListener("DOMContentLoaded", function() {
    const typingElements = document.querySelectorAll('.typing');
    typingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 4 + 1}s`; // Delay based on index
        element.style.animationDuration = "4s"; // Keep typing duration constant
    });
});
