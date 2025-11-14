document.querySelector('#darkModeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


const contactForm = document.getElementById('contactoForm');

contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const nombreCompletoInput = document.getElementById('nombreCompleto');
            const emailContactoInput = document.getElementById('emailContacto');
            const comentariosTextarea = document.getElementById('comentarios');

            const validateInput = (inputElement) => {
                if (inputElement.value.trim() === '') {
                    return false;
                } else {
                    return true;
                }
            };

            const validateEmail = (inputElement) => {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(inputElement.value.trim())) {
                    return false;
                } else {
                    return true;
                }
            };

            const isNombreValid = validateInput(nombreCompletoInput);
            const isEmailValid = validateInput(emailContactoInput) && validateEmail(emailContactoInput);
            const isComentariosValid = validateInput(comentariosTextarea);

            if (!isNombreValid || !isEmailValid || !isComentariosValid) {
                isValid = false;
            }

            if (isValid) {
                alert('Enviado correctamente');

                nombreCompletoInput.value = '';
                emailContactoInput.value = '';
                comentariosTextarea.value = '';

            } else {
                alert('Por favor, completa todos los campos correctamente.');
            }
        });

