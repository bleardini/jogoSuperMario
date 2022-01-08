var escolhaUm

function escolhaUm() {
    escolhaUm = prompt('1 - Não atender o celular    2 - Atende o chamo do chefe');
    while (true) {
        if (escolhaUm == 1 || escolhaUm == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            escolhaUm = prompt('1 - Não atender o celular   2 - Atende o chamo do chefe');
        }
    }
    if (escolhaUm == 1) {
        location = ('./ferias_continua.html')
    } else {
        location = ('./game_over_mario.html')
    }
}