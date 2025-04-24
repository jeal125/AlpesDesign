document.addEventListener('DOMContentLoaded', function() {
  // Verifica que GSAP está disponible
  if (typeof gsap !== 'undefined') {
    // Tu código de animaciones aquí
    gsap.to("#logo-flotante", {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
    const toggler = document.querySelector('.custom-toggler');
    const line1 = toggler.querySelector('.line1');
    const line2 = toggler.querySelector('.line2');
    const line3 = toggler.querySelector('.line3');
    const menu = document.getElementById('navbarContent');
  
    let menuOpen = false;
  
    toggler.addEventListener('click', () => {
      menuOpen = !menuOpen;
  
      if (menuOpen) {
        gsap.to(line1, { rotation: 45, y: 8, duration: 0.3 });
        gsap.to(line2, { opacity: 0, duration: 0.3 });
        gsap.to(line3, { rotation: -45, y: -8, duration: 0.3 });
      } else {
        gsap.to(line1, { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(line2, { opacity: 1, duration: 0.3 });
        gsap.to(line3, { rotation: 0, y: 0, duration: 0.3 });
      }
    });
  
    // Extra: cierra el menú al hacer click en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (menuOpen) {
          toggler.click(); // simula el cierre
        }
      });
    });
    // En tu index.js
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100, // Ajusta según tu header
            behavior: 'smooth'
          });
        }
      });
    }); 
    // Resto de tu código...
  } else {
    console.error('GSAP no se cargó correctamente');
  }
});

 