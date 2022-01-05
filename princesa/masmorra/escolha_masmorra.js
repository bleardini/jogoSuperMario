var escolhaMasmorra

function escolhaMasmorra () {
    escolhaMasmorra= prompt('1 - Aceita conversar;  2 - Não aceita conversar');
while (true) {
    if (escolhaMasmorra == 1 || escolhaMasmorra == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaMasmorra= prompt('1 - Aceita conversar; 2 - Não aceita conversar');
    }
}
if (escolhaMasmorra == 1) {
    location = ('./convite_aceito.html')
} else {
    location = ('./convite_recusado.html')
}
}