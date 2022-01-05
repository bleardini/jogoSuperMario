var escolhaUm

function escolhaUm () {
    escolhaUm= prompt('1 - Ajudar 2 - Seguir pelo dinheiro');
while (true) {
    if (escolhaUm == 1 || escolhaUm == 2) {
        break
    } else {
        escolhaUm= prompt('1 - Ajudar 2 - Seguir pelo dinheiro');
    }
}
if (escolhaUm == 1) {
    location = ('./ajudar.html')
} else {
    location = ('./nao_ajudar.html')
}
}