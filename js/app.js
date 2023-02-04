document.addEventListener('DOMContentLoaded', function () {
    //seleccionar elementos de la interfaz
    const InputEmail = document.querySelector('#email')
    const InputAsunto = document.querySelector('#asunto')
    const InputMensaje = document.querySelector('#mensaje')

    const formulario = document.querySelector('#formulario')

    InputEmail.addEventListener('blur', validar)
    InputAsunto.addEventListener('blur', validar)
    InputMensaje.addEventListener('blur', validar)
}
)
function validar(e) {
    //console.log(e.target.id)
    //console.log(e.target.parentElement.nextElementSibling)
    
    if(e.target.value.trim() === '') {
    mostrarAlerta(`El campo ${e.target.id} es obligatorio`,e.target.parentElement)
    return;} 
    
    if(!validarEmail(e.target.value) && e.target.id==='email'){
        mostrarAlerta('el mail no es muy valido',e.target.parentElement)
        return;
    } 
    limpiarAlerta(e.target.parentElement)
}

const mostrarAlerta = (mensaje,referencia)=>{
    const claseAlerta = referencia.querySelector('.bg-red-600')
    claseAlerta? claseAlerta.remove(): console.log('ya hay clase alerta')
    const alerta = document.createElement('p')
    alerta.textContent = mensaje
    alerta.classList.add('bg-red-600','text-white','p-2','text-center')
    referencia.appendChild(alerta)
}

function limpiarAlerta(referencia){
    //const referencia = e.target.parentElement
    const claseAlerta = referencia.querySelector('.bg-red-600')
    referencia.removeChild(claseAlerta)
}
function validarEmail(InputEmail){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const validacionDeMail = regex.test(InputEmail)
    console.log(validacionDeMail)
    return validacionDeMail;
}


