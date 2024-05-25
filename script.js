document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a.nav__link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelector('.contact__form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Aquí puedes agregar cualquier lógica de envío de formulario, como enviar los datos a un servidor

        // Mostrar el alert
        alert('Mensaje enviado correctamente');

        // Redireccionar a la página de inicio
        window.location.href = '#inicio';
    });
});
