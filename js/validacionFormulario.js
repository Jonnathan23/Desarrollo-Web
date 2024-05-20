const datos = {
    nombre: '',
    email: '',
    telf: '',
    mensaje: ''

}
const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const telf = document.querySelector('#telf');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

// Eventos a los campos
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
telf.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


// Evento submit
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    // Validar formulario

    const { nombre, email, telf, mensaje } = datos;
    const vacio = '';
    /*
    switch (vacio) {
        case nombre: mostrarError('nombre'); break;
        case telf: mostrarError('telf'); break;
        case email: mostrarError('email'); break;
        default:
            //Enviando formulario
            enviarFormulario("Se ha enviado correctamente");
    }
    */

    switch (vacio) {
        case nombre: mostrarAlerta('nombre'); break;
        case telf: mostrarAlerta('telf'); break;
        case email: mostrarAlerta('email'); break;
        default:
            //Enviando formulario
            mostrarAlerta("Se ha enviado correctamente");
    }

});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(e.target.id);
}
/*
function mostrarError(campo) {
    const error = document.createElement('P');
    error.textContent = `El campo ${campo} está vacío`;
    error.classList.add('error');

    formulario.appendChild(error);
    document.getElementById(campo).focus();

    //Desaparezca después de 5s
    setTimeout(e => error.remove(), 5000);
}


function enviarFormulario() {
    const enviar = document.createElement('P');
    enviar.textContent = `Enviando formulario`;
    enviar.classList.add('enviar');
    formulario.appendChild(enviar);

    //Desaparezca después de 5s
    setTimeout(e => enviar.remove(), 5000);
    
    //Borrar mensaje de error
    document.querySelector('.formulario p')?.remove();        
}*/

function mostrarAlerta(campo) {
    const alerta = document.createElement('P');
    alerta.textContent = campo;
    clase = datos.target == campo ? error : enviar;
    alerta.classList.add(clase);
    formulario.appendChild(alerta);


    //Remplaza si ya no existe ningún error
    document.querySelector('.formulario .error')?.remove();
    //Desaparezca despues de 5s
    setTimeout(e => alerta.remove, 5000);


}