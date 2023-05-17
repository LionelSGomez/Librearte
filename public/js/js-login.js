window.addEventListener('load', function(){

    let form = document.querySelector('.form');
    
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const allErrorLabels = document.querySelectorAll('.show-error-message');
        allErrorLabels.forEach((element) => {
        element.classList.remove('.show-error-message');
        element.innerHTML = '';
        });

        const errors = [];

        if(!form.email.value){
            errors.push({ name: 'email', message: 'El email es requerido' });
            form.email.classList.add('is-invalid');
        }else {
            form.email.classList.remove('is-invalid');
            form.email.classList.add('is-valid');
        }

        if(!form.password.value){
            errors.push({ name: 'password', message: 'La contraseña es requerida' });
            form.password.classList.add('is-invalid');
        }else {
            form.password.classList.remove('is-invalid');
            form.password.classList.add('is-valid');
        }
        
        errors.forEach((error) => {
            let errorLabel = document.getElementById(`error-${error.name}`);
            errorLabel.classList.add('show-error-message');
            errorLabel.innerText = error.message;
        })

        if(errors.length === 0){
            form.submit()
        }
    });
});