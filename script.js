document.querySelector('#darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});


    const contactForm = document.getElementById('contactoForm');

   contactForm.addEventListener('submit', (e) => {
                e.preventDefault(); 

            const nombreCompletoInput = document.getElementById('nombreCompleto');
            const emailContactoInput = document.getElementById('emailContacto');
            const comentariosTextarea = document.getElementById('comentario');
            const validateInput = (inputElement) => {
               return inputElement.value.trim() !== '';
            };

            const validateEmail = (inputElement) => {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(inputElement.value.trim());
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
                alert("completa todos los campos");
            }
        });

