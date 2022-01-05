var trabalhoEquipe

function trabalhoEquipe () {
    trabalhoEquipe = prompt('1 - Ignorar o cartão 2 - Seguir a pista do cartão');
while (true) {
    if (trabalhoEquipe == 1 || trabalhoEquipe == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        trabalhoEquipe = prompt('1 - Ignorar o cartão 2 - Seguir a pista do cartão');
    }
}
if (trabalhoEquipe == 1) {
    location = ('./equipe_luigi.html')
} else {
    location = ('./game_over_luigi.html')
}
}