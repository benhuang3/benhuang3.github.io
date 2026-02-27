// ~*~ GeoCities JavaScript ~*~

// Save mode preference when navigating
localStorage.setItem('siteMode', 'retro');

// Visitor counter
(function() {
    var count = localStorage.getItem('visitorCount');
    if (!count) {
        count = 1337;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('visitorCount', count);

    var counterEl = document.getElementById('visitor-count');
    if (counterEl) {
        var padded = String(count).padStart(6, '0');
        padded = padded.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        counterEl.textContent = padded;
    }
})();

// Sparkle cursor trail (throttled)
(function() {
    var lastSparkle = 0;

    document.addEventListener('mousemove', function(e) {
        var now = Date.now();
        if (now - lastSparkle < 80) return;
        lastSparkle = now;

        var sparkle = document.createElement('div');
        sparkle.style.cssText = 'position:fixed;pointer-events:none;z-index:9998;' +
            'left:' + e.clientX + 'px;top:' + e.clientY + 'px;' +
            'font-size:12px;opacity:1;';
        var chars = ['\u2726', '\u2727', '\u2605', '\u22C6', '\u00B7'];
        var colors = ['#ffff00', '#ff00ff', '#00ffff', '#ff6600', '#00ff00'];
        sparkle.textContent = chars[Math.floor(Math.random() * chars.length)];
        sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(sparkle);

        requestAnimationFrame(function() {
            sparkle.style.transition = 'all 0.5s ease-out';
            sparkle.style.opacity = '0';
            sparkle.style.transform = 'translateY(-25px) scale(0)';
        });

        setTimeout(function() {
            if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
        }, 600);
    });
})();
