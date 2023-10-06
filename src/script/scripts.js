// Get the current page's pathname
const currentPath = window.location.pathname;

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Loop through each link
navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    // Check if the link's href matches the current page's pathname
    if (linkHref === currentPath) {
        link.classList.add('active');
        link.style.color = '#ff5733'; // Set color to red for active link
    } else {
        link.style.color = '#000'; // Set color to black for non-active links
    }
});

