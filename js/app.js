document.addEventListener('DOMContentLoaded',function(){
    //seleccionar elementos de la interfaz
    const InputEmail = document.querySelector('#email')
    const InputAsunto = document.querySelector('#asunto')
    const InputMensaje = document.querySelector('#mensaje')

    InputEmail.addEventListener('blur',function(evento){
        console.log(evento.target.value)
    })

    console.log(InputEmail)
    console.log(InputAsunto)
    console.log(InputMensaje)



})
