let botao = document.querySelector ("#botao");
let motivacao = document.querySelector ("#motivacao");

botao.addEventListener("click",e =>{
    motivacao.textContent = "nuvens são apenas nuvens, pois o sol brilha sobre nós!";
})