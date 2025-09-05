document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    landingPage.addEventListener('click', () => {
        landingPage.classList.add('hidden');
        setTimeout(() => {
            mainContent.classList.add('active');
            document.body.style.overflow = 'auto';
            AOS.refresh();
        }, 800);
    });
});
