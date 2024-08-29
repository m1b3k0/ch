document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    
    function fadeInPage() {
        main.classList.remove('fade-out');
        main.classList.add('fade-in');
    }

    function handleLinkClick(e) {
        const link = e.currentTarget;
        
        if (link.hostname === window.location.hostname) {
            e.preventDefault();
            main.classList.remove('fade-in');
            main.classList.add('fade-out');
            
            setTimeout(() => {
                window.location = link.href;
            }, 500); // This should match the transition duration in CSS
        }
    }

    // Apply fade-in when page loads
    fadeInPage();

    // Add click event listeners to all internal links
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', handleLinkClick);
        }
    });
});