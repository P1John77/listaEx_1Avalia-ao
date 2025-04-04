function calcularSalarioAtual() {
    let salario = 1000.00;
    let percentualAumento = 0.0015; 
    const anoContratacao = 1995;
    const anoAtual = new Date().getFullYear();
    
    for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
        salario += salario * percentualAumento;
        percentualAumento *= 2; 
        
        console.log(`Ano ${ano}: Salário = R$ ${salario.toFixed(2)} (Aumento: ${(percentualAumento*100).toFixed(2)}%)`);
    }
    
    console.log(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)}`);
    return salario;
}

calcularSalarioAtual();




function calcularSalarioAtualVersao2() {
    let salario = parseFloat(prompt("Digite o salário inicial do funcionário:"));
    
    if (isNaN(salario) || salario <= 0) {
        alert("Valor inválido! Digite um salário inicial maior que zero.");
        return;
    }
    
    let percentualAumento = 0.0015;
    const anoContratacao = 1995;
    const anoAtual = new Date().getFullYear();
    
    for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
        salario += salario * percentualAumento;
        percentualAumento *= 2; 
        
        console.log(`Ano ${ano}: Salário = R$ ${salario.toFixed(2)} (Aumento: ${(percentualAumento*100).toFixed(2)}%)`);
    }
    
    console.log(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)}`);
    alert(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)}`);
    return salario;
}

calcularSalarioAtualVersao2();