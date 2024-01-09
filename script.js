function carregar() {
var msg = window.document.getElementById("msg")
var imagem = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var mints = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${mints} minutos.`
if (hora >= 0 && hora <12){
  //Bom dia
  imagem.src = "manha.jpg"
  document.body.style.background = '#ffcc93'
} else if (hora >= 12 && hora <18){
  //Boa tarde
  imagem.src = "tarde.jpg"
  document.body.style.background = '#b37963'
} else {
//Boa noite
imagem.src = "noite.jpg"
document.body.style.background = '#003575'
}
}