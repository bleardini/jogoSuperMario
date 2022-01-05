var escolhaMasmorra

function escolhaMasmorra () {
    escolhaMasmorra= prompt('1 - Dormir;  2 - Continuar a busca do tesouro');
while (true) {
    if (escolhaMasmorra == 1 || escolhaMasmorra == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaMasmorra= prompt('1 - Dormir; 2 - Continuar a busca do tesouro;');
    }
}
if (escolhaMasmorra == 1) {
    location = ('./outro_dia.html')
} else {
    location = ('./game_over.html')
}
}