let num = document.getElementById("num")
let lista = document.getElementById("sel")
let res = document.getElementById("res")
let valores = []
//let n = Number(num.value)
//let l = Number(lista.value)


   
    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        }else{
            return false
        }
    }

    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
    }
  
    function adicionar() {
      if(isNumero(num.value) && !inLista(num.value, valores)) {
         valores.push(Number(num.value))
         let item = document.createElement("option")
         item.text = `valor ${num.value} adicionado`
         lista.appendChild(item)
         res.innerHTML = ""
      }else{
          window.alert(" [ERRO] valor invalido ou ja encontrado na lista")
      }
      num.value = ""
      num.focus()
        
    }
    function finalizar(){
        if(valores.length == 0) {
            window.alert("Adiciona valores antes de finalizar")
        }else{
            let tot = valores.length 
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior) {
                    maior = valores[pos]
                }if(valores[pos] < menor ) {
                    menor = valores[pos]
                }
            }
            media = soma/tot
            res.innerHTML = ""
            res.innerHTML += `<p>Ao todo temos ${tot} elementos </p>`
            res.innerHTML += `<p>o maior valor informado foi ${maior}</p>`
            res.innerHTML += `<p>o menor valor informado foi ${menor}</p>`
            res.innerHTML += `<p>somando todos os valores temos ${soma}.</p>`
            res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
        }
    }