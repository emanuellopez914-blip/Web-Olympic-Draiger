// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página de exámenes de Olimpic Draiger cargada - Acceso mediante QR");
    
    // Actualizar fecha del examen al mes próximo
    const examDate = document.querySelectorAll('.info-card')[0];
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 15);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateElements = examDate.querySelectorAll('p');
    dateElements[0].textContent = nextMonth.toLocaleDateString('es-ES', options) + ", 2023";
    
    // Añadir interactividad a las imágenes de la galería
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const caption = this.querySelector('.gallery-caption').textContent;
            alert('Imagen: ' + caption + '\n\nEn una implementación real, esto abriría un lightbox para ver la imagen en tamaño completo.');
        });
    });
    
    // Botones de "Ver Ejemplo" en diplomas
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const diplomaTitle = this.closest('.diploma').querySelector('.diploma-header h3').textContent;
            alert('Mostraría el documento: ' + diplomaTitle + '\n\nEn una implementación real, esto abriría un PDF o una imagen del diploma.');
        });
    });
    
    // Botones de eventos
    const eventButtons = document.querySelectorAll('.btn-event');
    eventButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventTitle = this.closest('.event-card').querySelector('.event-details h3').textContent;
            alert('Más información sobre: ' + eventTitle + '\n\nEn una implementación real, esto llevaría a una página con detalles completos del evento.');
        });
    });
    
    // Actualizar año en el copyright
    const copyrightElements = document.querySelectorAll('.copyright p');
    copyrightElements[0].textContent = copyrightElements[0].textContent.replace('2023', new Date().getFullYear());
    
    // Efecto de carga para las tarjetas de estadísticas
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
    
    // Mensaje de bienvenida específico para acceso QR
    setTimeout(() => {
        console.log("Bienvenido a la plataforma de exámenes de Olimpic Draiger");
    }, 1000);
});