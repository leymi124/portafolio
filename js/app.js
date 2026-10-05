// Esperar a que todo el HTML se cargue por completo
document.addEventListener('DOMContentLoaded', () => {

  // 1. Menú Hamburguesa
  const menuToggle = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('#nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });
  }

  // 2. Formulario con Validación JS
  const contactForm = document.querySelector('#contact-form');
  const formFeedback = document.querySelector('#form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.querySelector('#nombre').value.trim();
      const email = document.querySelector('#email').value.trim();
      const mensaje = document.querySelector('#mensaje').value.trim();

      if (!nombre || !email || !mensaje) {
        formFeedback.textContent = 'Por favor, llena todos los campos.';
        formFeedback.style.color = 'red';
        return;
      }

      formFeedback.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
      formFeedback.style.color = 'green';
      contactForm.reset();
    });
  }

  // 3. Smooth Scroll en la navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Cerrar menú móvil si está abierto al dar clic
        if (navMenu) {
          navMenu.classList.remove('active');
        }
      }
    });
  });

  // 4. Dark Mode con Toggle & LocalStorage
  const darkToggle = document.querySelector('#dark-mode-toggle');

  if (darkToggle) {
    if (localStorage.getItem('theme') === 'dark' || 
       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    darkToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

});