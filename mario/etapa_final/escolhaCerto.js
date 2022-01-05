var escolhaCerto

function escolhaCerto () {
    escolhaCerto  = prompt('1 - Não  2 - Sim');
while (true) {
    if (escolhaCerto  == 1 || escolhaCerto  == 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaCerto  = prompt('1 - Não  2 - Sim');
    }
}
if (escolhaCerto  == 1) {
    location = ('../fim/final_triste.html')
} else {
    location = ('../fim/final_feliz.html')
}
}