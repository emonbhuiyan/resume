document.getElementById('print-btn').addEventListener('click', () => {
    window.print();
});

// Subtle fade-in effect for sections
document.querySelectorAll('section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        section.style.opacity = '1';
    }, index * 150);
});