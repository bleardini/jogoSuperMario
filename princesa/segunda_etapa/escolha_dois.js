var escolhaDois

function escolhaDois () {
    escolhaDois = prompt('1 - Ir ver o motivo do barulho 2 - Ficar quieta no quarto');
while (true) {
    if (escolhaDois == 1 || escolhaDois == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaDois = prompt('1 - Ir ver o motivo do barulho 2 - Ficar quieta no quarto');
    }
}
if (escolhaDois == 1) {
    location = ('./saiu_do_quarto.html')
} else {
    location = ('./escolha_errada.html')
}
}


