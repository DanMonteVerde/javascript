function contar(){
var inicio = document.getElementById("inicio")
var fim = document.getElementById("fim")
var pulo = document.getElementById("passo")
var res = document.getElementById("res")

if (inicio.value.length == 0 || fim.value.length == 0 || pulo.value.length== 0) {
    window.alert("[ERRO] faltam dados!")
}else {
    res.innerHTML="contando <br>"
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(pulo.value)
    if (i<f) {
        if (p <= 0){
            window.alert("passo invalido! considerando PASSO 1")
            p = 1
        }
            for(var c = i; c <= f; c += p) {
               res.innerHTML += `${c} \u{1F449} `
    }
    
}else{
   for(var c = i;c >= f;c -= p){
      res.innerHTML += `${c} \u{1F449}`
   }
 } 
  res.innerHTML += `\u{1F3C1}`
}
}