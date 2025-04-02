// script.js

document.addEventListener('DOMContentLoaded', () => {
    // For now, primarily relying on CSS for presentation.
    // Potential future additions:
    // - Subtle scroll animations for sections appearing
    // - Interactive elements if needed (though static is often better for this use case)

    console.log("Eric Oberndorfer's ClickUp Alignment Page Loaded");

    // Example: Smooth scroll for the CTA button if needed later
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton && ctaButton.getAttribute('href') === '#core-fit') {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.getElementById('core-fit');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

});
