// Funcion para el boton de registar usuario
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del formulario
    var nombreInput = document.getElementById('inputNombre');
    var edadInput = document.getElementById('inputEdad');
    var emailInput = document.getElementById('inputEmail');
    var registrarUsuario = document.getElementById('registrarUsuario');
    // Verificar si el botón fue encontrado
    if (registrarUsuario) {
        // Agregar un evento de clic al botón
        registrarUsuario.addEventListener('click', function (event) {
            // Prevenir el comportamiento predeterminado del formulario
            event.preventDefault();
            // Obtener los valores de los inputs
            var nombre = nombreInput.value;
            var edad = parseInt(edadInput.value); // Convertir a número
            var email = emailInput.value;
            // Crear un objeto con los parametros a enviar7
            var user = {
                name: nombre,
                age: edad,
                email: email
            };
            // Convertir el objeto a JSON
            var jsonData = JSON.stringify(user);
            // Fetch para registrar usuario -> con el protocolo HTTP
            fetch('http://localhost:3000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                // Manejar la respuesta de la API aquí
                console.log("USUARIO REGISTRADO: ", data);
                alert("Usuario registrado con éxito.");
            })
                .catch(function (error) { return console.error('Error al llamar a la API:', error); });
        });
    }
    else {
        console.error('El botón con el identificador "registrarUsuario" no fue encontrado en el documento.');
    }
});
