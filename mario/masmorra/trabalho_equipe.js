var trabalhoEquipe

function trabalhoEquipe () {
    trabalhoEquipe = prompt('1 - Perguntar o significado do desenho 2 - Ignorar o desenho');
while (true) {
    if (trabalhoEquipe == 1 || trabalhoEquipe == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        trabalhoEquipe = prompt('1 - Perguntar o significado do desenho 2 - Ignorar o desenho');
    }
}
if (trabalhoEquipe == 1) {
    location = ('./bebe_bowser.html')
} else {
    location = ('./game_over_dragaobowser.html')
}
}