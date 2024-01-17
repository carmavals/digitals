let audio = document.getElementById("audio")
let monologo = new Audio("assets/PARTICIPANTE 1.mp3")
let sonido = function(){
 monologo.play()
}

audio.addEventListener("click", sonido)

