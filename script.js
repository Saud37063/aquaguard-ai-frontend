// Change navbar background opacity on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 20, 10, 0.98)';
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'rgba(10, 20, 10, 0.85)';
        nav.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links is handled by CSS (scroll-behavior: smooth)
// If you decide to add the floating chatbot popup (Option A) later, you can add this function:
/*
function toggleChat() {
  const popup = document.getElementById('chat-popup');
  popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
}
*/