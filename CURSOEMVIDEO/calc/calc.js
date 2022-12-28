let res = document.getElementById("res")
function calc(){
    let n1 = document.getElementById("n1")
    let n2 = document.getElementById("n2")
    let n3 = Number(n1.value)
    let n = Number(n2.value)
    let s = n3+n
    if (n1.value == 0 || n2.value == 0){
        window.alert("[ERRO] por favor preencha os dados!")
    }else {
        res.innerHTML = (`o resultado da Soma de ${n3} + ${n} é igual a ${s}`)
    }
}function sub(){
    let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let n3 = Number(n1.value)
let n = Number(n2.value)
let f = n3-n
    if (n1.value == 0 || n2.value == 0){
        window.alert("[ERRO] por favor preencha os dados!")
    }else {
        res.innerHTML = (`o resultado da Subtraçao de ${n3} - ${n} é igual a ${f}`)
    }
}function MUL(){
    let n1 = document.getElementById("n1")
    let n2 = document.getElementById("n2")
    let n3 = Number(n1.value)
    let n = Number(n2.value)
    let m = n3*n
        if (n1.value == 0 || n2.value == 0){
            window.alert("[ERRO] por favor preencha os dados!")
        }else {
            res.innerHTML = (`o resultado da Multiplicaçao de ${n3} X ${n} é igual a ${m}`)
        } 
}function div2() {
    let n1 = document.getElementById("n1")
    let n2 = document.getElementById("n2")
    let n3 = Number(n1.value)
    let n = Number(n2.value)
    let d = n3/n
        if (n1.value == 0 || n2.value == 0){
            window.alert("[ERRO] por favor preencha os dados!")
        }else {
            res.innerHTML = (`o resultado da Divisão de ${n3} / ${n} é igual a ${d}`)
        }   
}