document.addEventListener('DOMContentLoaded', function() {
    const formAlta = document.getElementById('alta-producto-form');

    if (formAlta) {
        formAlta.addEventListener('submit', function(event) {
            let valid = true;

            const nombre = document.getElementById('nombre');
            const precio = document.getElementById('precio');
            const stock = document.getElementById('stock');
            const marca = document.getElementById('marca');
            const categoria = document.getElementById('categoria');
            const descripcionCorta = document.getElementById('descripcion-corta');
            const descripcionLarga = document.getElementById('descripcion-larga');
            const edadDesde = document.getElementById('edad-desde');
            const edadHasta = document.getElementById('edad-hasta');
            const foto = document.getElementById('foto');

            if (nombre.value.trim() === '') {
                valid = false;
                alert('El campo "Nombre" es obligatorio.');
            }
            if (precio.value <= 0) {
                valid = false;
                alert('El precio debe ser un número positivo.');
            }
            if (stock.value < 0) {
                valid = false;
                alert('El stock no puede ser negativo.');
            }
            if (marca.value.trim() === '') {
                valid = false;
                alert('El campo "Marca" es obligatorio.');
            }
            if (categoria.value.trim() === '') {
                valid = false;
                alert('El campo "Categoría" es obligatorio.');
            }
            if (descripcionCorta.value.trim() === '') {
                valid = false;
                alert('El campo "Descripción Corta" es obligatorio.');
            }
            if (descripcionLarga.value.trim() === '') {
                valid = false;
                alert('El campo "Descripción Larga" es obligatorio.');
            }
            if (edadDesde.value < 0) {
                valid = false;
                alert('La edad mínima no puede ser negativa.');
            }
            if (edadHasta.value < 0) {
                valid = false;
                alert('La edad máxima no puede ser negativa.');
            }
            if (edadDesde.value > edadHasta.value) {
                valid = false;
                alert('La edad mínima no puede ser mayor que la edad máxima.');
            }
            if (foto.files.length === 0) {
                valid = false;
                alert('Debe seleccionar una foto.');
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    }
});