function contarParesEImpares() {
    let pares = 0;
    let impares = 0;
    
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));
        
        if (isNaN(numero)) {
            alert("Valor inválido! Digite um número inteiro.");
            i--;
            continue;
        }
        
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    
    console.log(`Quantidade de números pares: ${pares}`);
    console.log(`Quantidade de números ímpares: ${impares}`);
}

contarParesEImpares();