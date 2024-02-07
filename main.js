//Variaveis
var desligado = true;

//Funçoes
function altLuz(){

    //Variaveis Locais
    let body = document.body;
    let botao = document.getElementById("botao");
    let imagem = document.getElementById("imagem");
    
    
    //Executar
    if(!desligado){
        body.style.backgroundColor = "#006494"
        botao.innerHTML = "Ligar"
        imagem.src = "desligado.jpg"

        desligado = true;
    }
    else{
        body.style.backgroundColor = "grey"
        botao.innerHTML = "Desligar"
        imagem.src = "ligado.jpg"

        desligado = false;
    }
    
}

