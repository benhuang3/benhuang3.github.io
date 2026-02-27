// Modern Portfolio JavaScript

// Save mode preference when navigating
localStorage.setItem('siteMode', 'modern');

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    var anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    var href = anchor.getAttribute('href');
    var target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }
});
