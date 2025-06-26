const texto_original = window.document.getElementById("titulo-header").textContent;

function clicouh1 () {
    let h1atual = window.document.getElementById("titulo-header");

    h1atual.textContent = (h1atual.textContent == texto_original) ? "Maybe places i'll live!" : "Places i wanna live";
}


/*
let botao = document.getElementById("botao-header");
let corAtual = getComputedStyle(botao).backgroundColor;

function mudar_texto(botao, cor_botao, nome) {
    let titulo = document.getElementById("titulo-header");
    let name_h1 = document.getElementsByName("span");

    let texto_a = "Places i wanna live";

    titulo.textContent = titulo.textContent === texto_a ? "Maybe places i'll live!" : texto_a;

    name_h1.textContent = nome

    botao.style.backgroundColor = titulo.textContent !== texto_a
        ? "rgb(204, 161, 105)"
        : cor_botao;
}

botao.addEventListener("click", () => {
    mudar_texto(botao, corAtual, nome);
});

window.alert("Olá teste")

let nome = window.prompt('Oi, qual o seu nome?'); Number.parse

windown.document.getElementsByClassName
*/