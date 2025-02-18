function gerarTabuada() {
    const numero = parseInt(document.getElementById('numeroTabuada').value);
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    document.getElementById('resultadoTabuada').innerHTML = resultado;
}

function somaImpares() {
    let soma = 0;
    for (let i = 1; i <= 100; i += 2) {
        soma += i;
    }
    document.getElementById('resultadoSomaImpares').innerHTML = `Soma dos ímpares de 1 a 100: ${soma}`;
}

function calcularFatorial() {
    const numero = parseInt(document.getElementById('numeroFatorial').value);
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    document.getElementById('resultadoFatorial').innerHTML = `Fatorial de ${numero}: ${fatorial}`;
}

function imprimirFibonacci() {
    let fib = [0, 1];
    let resultado = '0, 1';
    let i = 2;
    while (i < 10) {
        fib[i] = fib[i - 1] + fib[i - 2];
        resultado += `, ${fib[i]}`;
        i++;
    }
    document.getElementById('resultadoFibonacci').innerHTML = resultado;
}

function maiorNumero() {
    let maior = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
        if (numero > maior) {
            maior = numero;
        }
    }
    document.getElementById('resultadoMaiorNumero').innerHTML = `Maior número: ${maior}`;
}

function contarVogais() {
    const palavra = document.getElementById('palavraVogais').value.toLowerCase();
    let contagem = 0;
    const vogais = 'aeiou';
    for (let char of palavra) {
        if (vogais.includes(char)) {
            contagem++;
        }
    }
    document.getElementById('resultadoVogais').innerHTML = `Número de vogais: ${contagem}`;
}

function inverterString() {
    const palavra = document.getElementById('palavraInversa').value;
    let inversa = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        inversa += palavra[i];
    }
    document.getElementById('resultadoInversa').innerHTML = `String invertida: ${inversa}`;
}

function imprimirPrimos() {
    let primos = [];
    for (let num = 2; num <= 20; num++) {
        let isPrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrimo = false;
                break;
            }
        }
        if (isPrimo) {
            primos.push(num);
        }
    }
    document.getElementById('resultadoPrimos').innerHTML = `Números primos de 1 a 20: ${primos.join(', ')}`;
}

function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        const nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
        soma += nota;
    }
    const media = soma / 3;
    document.getElementById('resultadoMedia').innerHTML = `Média das notas: ${media.toFixed(2)}`;
}

function imprimirPiramide() {
    let resultado = '';
    const linhas = 5;
    for (let i = 1; i <= linhas; i++) {
        resultado += ' '.repeat(linhas - i) + '*'.repeat(2 * i - 1) + '<br>';
    }
    document.getElementById('resultadoPiramide').innerHTML = resultado;
}