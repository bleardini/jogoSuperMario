var escolhaUm

function escolhaUm() {
    escolhaUm = prompt('1 - Ir para casa nova 2 - Contar para todos');
    while (true) {
        if (escolhaUm == 1 || escolhaUm == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            escolhaUm = prompt('1 - Ir para casa nova 2 - Contar para todos');
        }
    }
    if (escolhaUm == 1) {
        location = ('../segunda_etapa/casanova.html')
    } else {
        location = ('../segunda_etapa/game_over_um.html')
    }
}