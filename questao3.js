function calcularEstatisticas() {
    let quantidade = parseInt(prompt("Quantos números você deseja inserir?"));
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, digite um número válido maior que zero.");
        return;
    }
    
    let menor = Infinity;
    let maior = -Infinity;
    let soma = 0;
    
    for (let i = 1; i <= quantidade; i++) {
        let numero = parseFloat(prompt(`Digite o ${i}º número:`));
        
        if (isNaN(numero)) {
            alert("Valor inválido! Digite um número.");
            i--;
            continue;
        }
        
        if (numero < menor) {
            menor = numero;
        }
        
        if (numero > maior) {
            maior = numero;
        }
        
        soma += numero;
    }
    
    console.log(`Menor valor: ${menor}`);
    console.log(`Maior valor: ${maior}`);
    console.log(`Soma dos valores: ${soma}`);
}

calcularEstatisticas();