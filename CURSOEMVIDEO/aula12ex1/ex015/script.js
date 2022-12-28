function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector(`div#res`)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE")
    }else{
        var fsex = document.getElementsByName("sex")
        var idade = ano - Number(fano.value)
        var genero = " "
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if (fsex[0].checked) {
            genero = "homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src","mulek.png")
            }else if (idade < 21){
                img.setAttribute("src","legal.png")

            }else if (idade < 50){
                img.setAttribute("src","adulto.png")

            }else{
                img.setAttribute("src", "velho.png")

            }
        } else if (fsex[1].checked) 
        genero = "mulher"
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos !`
      }  res.appendChild(img)
    
}