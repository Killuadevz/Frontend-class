function imprimirResultados() {
    let contagem = "Números de 1 a 10: ";
    for (let i = 1; i <= 10; i++) {
        contagem += i + " ";
    }
    document.getElementById("contagem").innerText = contagem;

    let pares = "Números pares até 20: ";
    for (let i = 2; i <= 20; i += 2) {
        pares += i + " ";
    }
    document.getElementById("pares").innerText = pares;

    let regressiva = "Contagem regressiva: ";
    let j = 10;
    while (j >= 1) {
        regressiva += j + " ";
        j--;
    }
    document.getElementById("regressiva").innerText = regressiva;

    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        soma += i;
    }
    document.getElementById("soma").innerText = "Soma de 1 a 5: " + soma;

    let multiplos = "Múltiplos de 3 até 15: ";
    for (let i = 3; i <= 15; i += 3) {
        multiplos += i + " ";
    }
    document.getElementById("multiplos").innerText = multiplos;
}

imprimirResultados();