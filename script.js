addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formularioRegistro');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado con éxito.');
    });
});

//? Ir a la pagina de felicitaciones
function felicitaciones() {
    addEventListener('submit', function() {
    window.location.href = "felicitaciones.html";
} );
}
felicitaciones();