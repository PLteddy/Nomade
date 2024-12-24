
// Popup logic
const btnFindBoutique = document.querySelector('.btn-find-boutique');
const popupOverlay = document.querySelector('.popup-overlay');
const btnClosePopup = document.querySelector('.btn-close-popup');

btnFindBoutique.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

btnClosePopup.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

// Accordion logic
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle visibility
        content.style.display = content.style.display === 'block' ? 'none' : 'block';

        // Rotate the arrow
        header.classList.toggle('active');
    });
});
