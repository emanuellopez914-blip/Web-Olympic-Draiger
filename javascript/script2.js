// script2.js - Para la página principal
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página principal de Olimpic Draiger cargada");
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('nav a[href^="#"], .footer-section a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Botones de inscripción a clases
    const classButtons = document.querySelectorAll('.btn-class');
    classButtons.forEach(button => {
        button.addEventListener('click', function() {
            const className = this.closest('.class-card').querySelector('.class-header h3').textContent;
            alert('¡Gracias por tu interés en la clase ' + className + '!\n\nNos pondremos en contacto contigo para programar tu clase de prueba gratuita.');
            
            // En una implementación real, esto abriría un formulario de contacto
            // window.location.href = 'contacto.html?clase=' + encodeURIComponent(className);
        });
    });
    
    // Actualizar año en el copyright
    const copyrightElements = document.querySelectorAll('.copyright p');
    copyrightElements[0].textContent = copyrightElements[0].textContent.replace('2023', new Date().getFullYear());
    
    // Efecto de animación para las tarjetas al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.achievement-card, .instructor-card, .class-card, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Cambiar clase activa en navegación al hacer scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}` || 
                (current === '' && link.getAttribute('href') === 'index2.html')) {
                link.classList.add('active');
            }
        });
    });
    
    // Animación para estadísticas
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        
        const updateStat = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current) + '+';
                setTimeout(updateStat, 30);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        // Iniciar animación cuando la sección sea visible
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateStat();
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statObserver.observe(stat.closest('.about-stats') || stat.closest('.stat'));
    });
    
    // Mensaje de bienvenida
    setTimeout(() => {
        console.log("Bienvenido a Olimpic Draiger - Donde forjamos campeones");
    }, 1000);
});