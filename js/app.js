document.addEventListener('DOMContentLoaded',function(){
    //seleccionar elementos de la interfaz
    const InputEmail = document.querySelector('#email')
    const InputAsunto = document.querySelector('#asunto')
    const InputMensaje = document.querySelector('#mensaje')

    InputEmail.addEventListener('blur',validar)
    InputAsunto.addEventListener('blur',validar)
    InputMensaje.addEventListener('blur',validar)
    
    function validar(e) {
        e.target.value.trim()===''?console.log('nada che'):console.log('ahora si')
    }
     }
     )





