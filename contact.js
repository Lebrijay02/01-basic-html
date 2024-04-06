document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    document.getElementById('message').innerHTML = 'Gracias por sus comentarios ' + nombre + ', te contactaremos a ' + email + ' en caso de ser necesario.';

    document.getElementById('asunto').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('comentarios').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';
});
