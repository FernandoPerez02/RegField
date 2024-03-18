document.addEventListener('DOMContentLoaded', function() {
    var btn_cancel = document.getElementById('btn_cancel');
    btn_cancel.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la redirección predeterminada al hacer clic en el enlace

        Swal.fire({
            title: '¿Desea cancelar el registro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                // Codigo para cancelar el registro
                Swal.fire('Registro cancelado', '', 'success').then(() => {
                    window.location.href='../../Ini_sesion/in_ses.html'; 
                    //ir a otra pagina al oprimir "Si" en la alerta
                });
            } else {
                // No hacer nada si el usuario elige no cancelar
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
var btn_register = document.getElementById('btn_register');
btn_register.addEventListener('click', function(event) {
    event.preventDefault();

    Swal.fire('Registro exitoso', '', 'success'),
    then((result) => {
        then(() => {
                window.location.href='../../Ini_sesion/in_ses.html';  
        });
    });
});
});