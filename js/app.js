document.addEventListener('DOMContentLoaded', function () {
    //seleccionar elementos de la interfaz
    const InputEmail = document.querySelector('#email')
    const InputAsunto = document.querySelector('#asunto')
    const InputMensaje = document.querySelector('#mensaje')
    const InputCC = document.querySelector('#CC')
    const formulario = document.querySelector('#formulario')
    const mailObjeto = {
        email: '',
        CC:'',
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
    InputCC.addEventListener('input', validar)
    btnReset.addEventListener('click', function (e) {
        e.preventDefault;
            resetearFormulario()
        }
    )
    formulario.addEventListener('submit', enviarEmail)


    function validar(e) {
        //console.log(e.target.id)
        //console.log(e.target.parentElement.nextElementSibling)

        if (e.target.value.trim() === '' && e.target.id != 'CC') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            mailObjeto[e.target.name] = ''
            comprobarEmail()
            return;
        }

        if (!validarEmail(e.target.value) && e.target.id === 'email') {
            mostrarAlerta('el mail no es válido', e.target.parentElement)
            mailObjeto[e.target.name] = ''
            comprobarEmail()
            
            return;
        }
        if (!validarCC(e.target.value) && e.target.id === 'CC' && e.target.value!='') {
            mostrarAlerta('el mail no es válido', e.target.parentElement)
            mailObjeto[e.target.name] = ''
            comprobarEmail()
            return;
        }
        

        limpiarAlerta(e.target.parentElement)

        //Asignar valores
        mailObjeto[e.target.name] = e.target.value.trim().toLowerCase()
        /*if(InputCC.value!=''){
            delete mailObjeto.CC
        }*/
        console.log(mailObjeto)
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
        //if(e.target.id==='CC' && e.target.value===''){claseAlerta.remove()}
    }
    function validarEmail(InputEmail) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const validacionDeMail = regex.test(InputEmail)
        //console.log(validacionDeMail)
        return validacionDeMail;
    }
    function validarCC(InputCC) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const validacionDeCC = regex.test(InputCC)
        //console.log(validacionDeMail)
        return validacionDeCC;
    }

    function comprobarEmail() {
        console.log(mailObjeto)
        if(mailObjeto.CC=''){
            delete mailObjeto.CC
        }
       if (Object.values(mailObjeto).includes('')) {
           //if ((mailObjeto.email ='') || (mailObjeto.asunto ='')|| (mailObjeto.mensaje ='')){
            
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
            return;
        }
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false
    }

    function enviarEmail(e) {
        e.preventDefault()
        console.log('enviando')
        spinner.classList.add('flex')
        spinner.classList.remove('hidden')
        setTimeout(() => {
            spinner.classList.remove('flex')
            spinner.classList.add('hidden')
    
            resetearFormulario()

            const alertaSuccess = document.createElement('p')
            alertaSuccess.classList.add('bg-green-500','text-white','p-2','text-center',
            'rounded-lg','font-bold','text-sm','uppercase')
            alertaSuccess.textContent = 'se ha enviado tu mail!'
            formulario.appendChild(alertaSuccess)
            setTimeout(()=>{
                alertaSuccess.remove()
            },3000)
        }, 3000)
       
    }
    function resetearFormulario() {
        mailObjeto.email = '',
        mailObjeto.CC = '',
            mailObjeto.asunto = '',
            mailObjeto.mensaje = ''
        formulario.reset()
        comprobarEmail()
    }


}
)

