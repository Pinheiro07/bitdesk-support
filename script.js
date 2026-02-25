// Script.js

// Active Navigation Link Highlighting
const navLinks = document.querySelectorAll('nav a');

function highlightLink() {
    navLinks.forEach((link) => {
        link.classList.remove('active');
    });
    this.classList.add('active');
}

navLinks.forEach((link) => {
    link.addEventListener('click', highlightLink);
});

// Smooth Scrolling
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    
    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    // Submit to WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)} by ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
    window.open(whatsappUrl);
});

function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

// Intersection Observer for Scroll Animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});

// Form Reset Functionality
function resetForm() {
    form.reset();
}

// Call resetForm when needed, e.g., after form submission if you decide to keep it
// form.addEventListener('reset', resetForm);