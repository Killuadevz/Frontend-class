function encontrarArmstrong() {
    let armstrongNumbers = [];
    for (let num = 100; num <= 1000; num++) {
        const digits = String(num).split('');
        const sumOfCubes = digits.reduce((sum, digit) => sum + Math.pow(Number(digit), 3), 0);
        if (sumOfCubes === num) {
            armstrongNumbers.push(num);
        }
    }
    document.getElementById('resultadoArmstrong').innerHTML = `Números de Armstrong entre 100 e 1000: ${armstrongNumbers.join(', ')}`;
}

function jogoAdivinhacao() {
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;
    let palpite;
    let tentativas = 0;

    while (palpite !== numeroSorteado) {
        palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
        tentativas++;
        if (palpite < numeroSorteado) {
            alert("O número é maior!");
        } else if (palpite > numeroSorteado) {
            alert("O número é menor!");
        } else {
            alert(`Parabéns! Você adivinhou o número em ${tentativas} tentativas.`);
        }
    }
}

function ordenarArray() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
        numeros.push(numero);
    }

    for (let i = 0; i < numeros.length - 1; i++) {
        for (let j = 0; j < numeros.length - 1 - i; j++) {
            if (numeros[j] > numeros[j + 1]) {
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
            }
        }
    }
    document.getElementById('resultadoOrdenacao').innerHTML = `Números ordenados: ${numeros.join(', ')}`;
}

function imprimirTrianguloPascal() {
    let resultado = '';
    const linhas = 5;

    for (let i = 0; i < linhas; i++) {
        let valor = 1;
        for (let j = 0; j <= i; j++) {
            resultado += valor + ' ';
            valor = (valor * (i - j)) / (j + 1);
        }
        resultado += '<br>';
    }
    document.getElementById('resultadoTriangulo').innerHTML = resultado;
}

function converterDecimalParaBinario() {
    let numeroDecimal = parseInt(prompt("Digite um número decimal:"));
    let binario = '';
    
    while (numeroDecimal > 0) {
        binario = (numeroDecimal % 2) + binario;
        numeroDecimal = Math.floor(numeroDecimal / 2);
    }
    
    document.getElementById('resultadoBinario').innerHTML = `Número em binário: ${binario}`;
}