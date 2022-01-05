var escolhaPersonagens 

function escolhaPersonagens () {
    escolhaPersonagens = prompt('1 - Super Mario 2 - Princesa 3 - Luigi');
while (true) {
    if (escolhaPersonagens == 1 || escolhaPersonagens == 2 || escolhaPersonagens == 3) {
        break
    } else {
        alert("Personagem inválido, digite um número entre 1 e 3!");
        escolhaPersonagens = prompt('1 - Super Mario 2 - Princesa 3 - Luigi');
    }
}
if (escolhaPersonagens == 1) {
    location = ('./mario/primeira_etapa/escolha_mario_um.html')
} else if (escolhaPersonagens == 2) {
    location = ('./princesa/primeira_etapa/escolha_princesa_um.html')
}
else {
    location = ('./luigi/primeira_etapa/escolha_luigi_um.html')
}
}   