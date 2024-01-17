let audio = document.getElementById("audio")
let monologo = new Audio("assets/remember.mp3")
let sonido = function(){
 monologo.play()
}

audio.addEventListener("click", sonido)

