document.addEventListener('DOMContentLoaded', function () {
    //seleccionar elementos de la interfaz
    const InputEmail = document.querySelector('#email')
    const InputAsunto = document.querySelector('#asunto')
    const InputMensaje = document.querySelector('#mensaje')
    const InputCC = document.querySelector('#CC')
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
    InputCC.addEventListener('input', validar)
    InputCC.addEventListener('input', (e) => {
//con este segundo evento input, se resolvio el problema del alert que no se removia al estar vacio el campo CC
        const claseAlerta = CC.parentElement.querySelector('.bg-red-600')
        if (InputCC.value === '' && claseAlerta) {
          claseAlerta.remove()
        } else if (!validarEmail(InputCC.value)) {
          mostrarAlerta('El correo electrónico no es válido', CC.parentElement)
        } else if (claseAlerta) {
          claseAlerta.remove()
        }
      })
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
            delete(mailObjeto.CC)
            return;
        }

        if (!validarEmail(e.target.value) && e.target.id === 'email') {
            mostrarAlerta('el mail no es válido', e.target.parentElement)
            mailObjeto[e.target.name] = ''
            comprobarEmail()
            
            return;
        }

        if (!validarEmail(e.target.value) && e.target.id === 'CC') {
            mostrarAlerta('el mail no es válido', e.target.parentElement)
            mailObjeto[e.target.name] = ''
            delete mailObjeto.CC
            comprobarEmail()
            return;
        }
        //si hay algo en CC, pero no es un mail
        /*if (mailObjeto.hasOwnProperty('CC') && !validarCC(e.target.value) && e.target.value!='') {
            mostrarAlerta('el mail no es válido', e.target.parentElement)
            mailObjeto[e.target.name] = ''
            mailObjeto.CC = e.target.value
            delete(mailObjeto.CC)
            comprobarEmail()
            return;
        }
        if (mailObjeto.hasOwnProperty('CC') && mailObjeto.CC.trim() === '') {
            delete mailObjeto.CC;
            //limpiarAlerta(e.target.parentElement)
          }*/

        
          

        limpiarAlerta(e.target.parentElement)

        const claseAlerta = CC.parentElement.querySelector('.bg-red-600')
        if (InputCC.value === '' && claseAlerta) {
            limpiarAlerta(e.target.parentElement)
          }


        //Asignar valores
        mailObjeto[e.target.name] = e.target.value.trim().toLowerCase()

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
        //if(e.target.id==='CC' && e.target.value===''){claseAlerta.remove()}//no esta definido el e
        //if(mailObjeto.CC.value === ''){ claseAlerta.remove() }
        //if(!InputCC.value) { claseAlerta.remove() }
        
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
            mailObjeto.asunto = '',
            mailObjeto.mensaje = ''
        formulario.reset(),
        delete mailObjeto.CC,
        comprobarEmail()
    }
}
)
