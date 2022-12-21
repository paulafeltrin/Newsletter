let inputEmail = document.getElementById("email")
let botaoAviso = document.getElementById("aviso");

botaoAviso.onclick = function () {
    if(!inputEmail.value){
        alert("Digite seu e-mail para receber a nossa newsletter")
    }else{
        alert(`Parabéns! \nVocê receberá as melhores notícias diratamente de seu e-mail! \nE-mail cadastrado: ${inputEmail.value}`)
    }
}