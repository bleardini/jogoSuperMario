var escolhaMasmorra

function escolhaMasmorra () {
    escolhaMasmorra= prompt('1 - Não tirar cochilo ;  2 -Tirar um cochilo');
while (true) {
    if (escolhaMasmorra == 1 || escolhaMasmorra == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaMasmorra= prompt('1 - Não tirar cochilo; 2 - Tirar um cochilo');
    }
}
if (escolhaMasmorra == 1) {
    location = ('./ferias_never_end.html')
} else {
    location = ('./game_over_ferias.html')
}
}