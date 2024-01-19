// let audio = document.getElementById("audio")
// let monologo = new Audio("assets/remember.mp3")
// let sonido = function(){
//  monologo.play()
// }

// audio.addEventListener("click", sonido)

let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let respuesta = document.getElementById("recuerdo").value
    let divResultado = document.createElement('div')
   
    divResultado.innerTEXT = `${respuesta}`
let body = document.getElementById('body')
body.appendChild(divResultado)
    console.log(respuesta)

})