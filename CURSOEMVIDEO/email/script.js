function veri() {
    let e = document.getElementById("email")
    let res = document.getElementById("res")
    let em = String(e.value)
    if (e.value.length==0){
        window.alert("DIGITA AI DESGRAÇADO")
    }else {
    res.innerHTML=`seu email é:${em}`
    }
    

 }

