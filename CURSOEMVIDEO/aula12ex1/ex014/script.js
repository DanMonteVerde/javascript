function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora sao ${hora} horas!`
 if(hora >= 0 && hora < 12) {
     img.src = "fotomanha.png"
     document.body.style.background = "#94ced3"
 }else if (hora >= 12 && hora < 18 ) {
     img.src = "fototarde.png"
     document.body.style.background = "#fb9b32"

 } else{
     img.src = "fotonoite.png"
  document.body.style.background = "#b592c6"
}  
 
}
