var escolhaAmigos

function escolhaAmigos () {
    escolhaAmigos = prompt('1 - Aceitar companhia   2 - Continuar sozinho');
while (true) {
    if (escolhaAmigos == 1 || escolhaAmigos== 2) {
        break
    } else {
        alert("Escolha inválida, digite 1 ou 2");
        escolhaAmigos = prompt('1 - Aceitar companhia  2 - Continuar sozinho');
    }
}
if (escolhaAmigos == 1) {
    location = ('../fim/final_feliz.html')
} else {
    location = ('../fim/final_triste.html')
}
}