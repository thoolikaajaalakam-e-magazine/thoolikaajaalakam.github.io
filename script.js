// script.js

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const langToggle = document.getElementById('lang-toggle');
    const storedLang = localStorage.getItem('appLang') || 'en'; // Default to English

    // Set initial language
    body.setAttribute('data-lang', storedLang);
    updateToggleText(storedLang);

    // Event listener for the toggle button
    langToggle.addEventListener('click', () => {
        const currentLang = body.getAttribute('data-lang');
        const newLang = (currentLang === 'en') ? 'ml' : 'en';

        // Update the body attribute and local storage
        body.setAttribute('data-lang', newLang);
        localStorage.setItem('appLang', newLang);
        
        // Update the button text
        updateToggleText(newLang);
    });

    // Function to update button text based on language
    function updateToggleText(lang) {
        if (lang === 'en') {
            langToggle.textContent = 'മലയാളം (ML)';
        } else {
            langToggle.textContent = 'English (EN)';
        }
    }
});