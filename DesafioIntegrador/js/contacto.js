document.addEventListener('DOMContentLoaded', function() {
    const formContacto = document.getElementById('contacto-form');

    if (formContacto) {
        formContacto.addEventListener('submit', function(event) {
            let valid = true;
            
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const comentarios = document.getElementById('comentarios');

            if (nombre.value.trim() === '') {
                valid = false;
                alert('El campo "Nombre" es obligatorio.');
            }
            if (!/\S+@\S+\.\S+/.test(email.value)) {
                valid = false;
                alert('El e-mail no es válido.');
            }
            if (comentarios.value.trim() === '') {
                valid = false;
                alert('El campo "Comentarios" es obligatorio.');
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    }
});
