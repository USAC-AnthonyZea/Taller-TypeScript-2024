// Funcion para el boton de registar usuario
document.addEventListener('DOMContentLoaded', function() {

    // Obtener referencias a los elementos del formulario
    const nombreInput: HTMLInputElement | null = document.getElementById('inputNombre') as HTMLInputElement;
    const edadInput: HTMLInputElement | null = document.getElementById('inputEdad') as HTMLInputElement;
    const emailInput: HTMLInputElement | null = document.getElementById('inputEmail') as HTMLInputElement;
    const registrarUsuario: HTMLButtonElement | null = document.getElementById('registrarUsuario') as HTMLButtonElement;

    // Verificar si el botón fue encontrado
    if (registrarUsuario) {

        // Agregar un evento de clic al botón
        registrarUsuario.addEventListener('click', function(event) {
            // Prevenir el comportamiento predeterminado del formulario
            event.preventDefault();

             // Obtener los valores de los inputs
            const nombre: string = nombreInput.value;
            const edad: number = parseInt(edadInput.value); // Convertir a número
            const email: string = emailInput.value;

            // Crear un objeto con los parametros a enviar7
            const user = {
                name: nombre,
                age: edad,
                email: email
            }

            // Convertir el objeto a JSON
            const jsonData: string = JSON.stringify(user);

            // Fetch para registrar usuario -> con el protocolo HTTP
            fetch('http://localhost:3000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            
            })
            .then(response => response.json())
            .then(data => {
                // Manejar la respuesta de la API aquí
                console.log("USUARIO REGISTRADO: ", data);
                alert("Usuario registrado con éxito.");
            })
            .catch(error => console.error('Error al llamar a la API:', error));
        });

    } else {
        console.error('El botón con el identificador "registrarUsuario" no fue encontrado en el documento.');
    }
});