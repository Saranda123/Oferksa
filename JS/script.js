document.addEventListener('DOMContentLoaded', function () {
    navegacionFija();
});

function navegacionFija() {
    const navegacion = document.querySelector('.navegacion') || document.querySelector('.nav-bg');
    const referencia = document.querySelector('.questionario') || document.querySelector('main');

    if (!navegacion || !referencia) {
        return;
    }

    // Asegura compatibilidad con los estilos existentes (.navegacion.fijo)
    navegacion.classList.add('navegacion');

    window.addEventListener('scroll', function () {
        if (referencia.getBoundingClientRect().bottom < 1) {
            navegacion.classList.add('fijo');
        } else {
            navegacion.classList.remove('fijo');
        }
    });
}
