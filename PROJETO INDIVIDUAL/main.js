// BASE 64

let codificar = document.querySelector('#codificar');  // variável let que armazena a codificação.
let decodificar1 = document.querySelector('#decodificar'); // variável let decode que armazena a decodificação.
let output = document.querySelector('textarea'); // variável let que armazena a área do texto (string).

codificar.addEventListener('click', () =>{ // Chamar um evento ao clicar no botão, guardado na variável (codificar).
    output.value = btoa(output.value) ; // A saída da resposta das strings codificadas e invertidas para a base 64.
});

decodificar1.addEventListener('click', () =>{ //Chamar um evento ao clicar no botão, guardado na variável (decodificar1).
    output.value = atob(output.value) ; //A saída da resposta das strings codificadas e retorna a string original.
});


// CIFRA DE CÉSAR

let values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"); // variável let que armazena o alfabeto.
let key = +document.getElementById("key").innerHTML; // Variável let que armazena key+.
let key2 = -document.getElementById("key").innerHTML;// Variável let que armazena key-.

function prev() { // função para selecionar a chave -.
    if(key > 1) {
        key--;
        document.getElementById("key").innerHTML = key;
    }
}
function next() { // função para selecionar a chave +.
    if(key < 25) {
        key++;
        document.getElementById("key").innerHTML = key;
    }
}

function enviarcesar() { //função para enviar cifra de césar.
    let input = document.getElementById("input").value.toUpperCase();
    let result = "";

    for(let i = 0; i<input.length; i++){ //Passa por cada caracter do input.

        let posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto.
        let letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras).
        letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso.
        result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
    }
    document.getElementById("output").innerHTML = result; // 
}
function decodificar() { // decodificar a cifra de cesar.
    let input = document.getElementById("input").value.toUpperCase();
    let result = "";

    for(let i = 0; i<input.length; i++){ //Passa por cada caracter do input

        let posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto.
        let letraComDeslocamento = (posicaoDaLetraNoAlfabeto - key2) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras).
        letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //Decodificador, voltar para a codificação inicial do alfabeto.
        result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
    }
    document.getElementById("output").innerHTML = result; // Mostrar o resultado.
}