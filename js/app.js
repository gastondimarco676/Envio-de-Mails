document.addEventListener('DOMContentLoaded', function () {
    //seleccionar elementos de la interfaz
    const InputEmail = document.querySelector('#email')
    const InputAsunto = document.querySelector('#asunto')
    const InputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')
    const mailObjeto = {
        email: '',
        asunto: '',
        mensaje: ''
    }
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector("#spinner")
    //console.log(mailObjeto)


    InputEmail.addEventListener('input', validar)
    InputAsunto.addEventListener('input', validar)
    InputMensaje.addEventListener('input', validar)
    btnReset.addEventListener('click', function(e){
        e.preventDefault;
        const pregunta = prompt('estas seguro?')
       if(pregunta==='si'){
        formulario.reset 
        mailObjeto.email= '',
        mailObjeto.asunto= '',
        mailObjeto.mensaje= ''
        console.log(mailObjeto)
        comprobarEmail()
    }
    })
    formulario.addEventListener('submit',enviarEmail)


    function validar(e) {
        //console.log(e.target.id)
        //console.log(e.target.parentElement.nextElementSibling)


        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            //comprobarEmail()
            mailObjeto[e.target.name] = ''
            comprobarEmail()
            return;
        }

        if (!validarEmail(e.target.value) && e.target.id === 'email') {
            mostrarAlerta('el mail no es válido', e.target.parentElement)
            mailObjeto[e.target.name] = ''
            comprobarEmail()
            //comprobarEmail()
            return;
        }
        limpiarAlerta(e.target.parentElement)

        //Asignar valores
        mailObjeto[e.target.name] = e.target.value.trim().toLowerCase();
        //console.log(mailObjeto)
        comprobarEmail()
    }

    const mostrarAlerta = (mensaje, referencia) => {
        limpiarAlerta(referencia)
        const claseAlerta = referencia.querySelector('.bg-red-600')
        //claseAlerta? claseAlerta.remove(): console.log('ya hay clase alerta')
        const alerta = document.createElement('p')
        alerta.textContent = mensaje
        alerta.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
        referencia.appendChild(alerta)
    }

    function limpiarAlerta(referencia) {
        //const referencia = e.target.parentElement
        const claseAlerta = referencia.querySelector('.bg-red-600')
        if (claseAlerta) { claseAlerta.remove() }
    }
    function validarEmail(InputEmail) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const validacionDeMail = regex.test(InputEmail)
        //console.log(validacionDeMail)
        return validacionDeMail;
    }

    function comprobarEmail() {
        console.log(mailObjeto)
        if (Object.values(mailObjeto).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
            return;
        }
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false
    }
}



)
function enviarEmail(e){
    e.preventDefault()
    console.log('enviando')
    spinner.classList.add('flex')
    spinner.classList.remove('hidden')
    
    }