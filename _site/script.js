// Function to toggle expansion of content boxes
function toggleExpansion(box) {
    // Toggle the expanded class
    box.classList.toggle('expanded');
    
    // Optional: Close other boxes when one is opened
    // Uncomment the following code if you want only one box open at a time
    
    /*
    const allBoxes = document.querySelectorAll('.content-box');
    allBoxes.forEach(otherBox => {
        if (otherBox !== box) {
            otherBox.classList.remove('expanded');
        }
    });
    */
}

// Add smooth scroll behavior for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to the page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close all expanded boxes when Escape is pressed
            const expandedBoxes = document.querySelectorAll('.content-box.expanded');
            expandedBoxes.forEach(box => {
                box.classList.remove('expanded');
            });
        }
    });
    
    // Optional: Add click outside to close functionality
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.content-box')) {
            const expandedBoxes = document.querySelectorAll('.content-box.expanded');
            expandedBoxes.forEach(box => {
                box.classList.remove('expanded');
            });
        }
    });
});
