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
    e.target.value.trim() === '' ? mostrarAlerta() : console.log('ahora si')
}

const mostrarAlerta = ()=>{
    const alerta = document.createElement('p')
    alerta.textContent ='no hay nada che, imprimiendo en html porque nadie navega con la consola abierta'
    alerta.classList.add('bg-red-600','text-white','p-2')
    formulario.appendChild(alerta)
}




