function calcularInvestimento() {
    let capital = parseFloat(prompt("Digite o capital inicial:"));
    let taxa = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
    let tempo = parseInt(prompt("Digite o tempo do investimento (meses):"));
    
    if (isNaN(capital) || capital <= 0 || isNaN(taxa) || taxa <= 0 || isNaN(tempo) || tempo <= 0) {
        alert("Valores inválidos! Digite números positivos.");
        return;
    }
    
    taxa = taxa / 100;
    let montante = capital * Math.pow(1 + taxa, tempo);
    
    alert(`Montante após ${tempo} meses: R$ ${montante.toFixed(2)}`);
    console.log(`Capital: R$ ${capital.toFixed(2)}\nTaxa: ${taxa*100}% a.m.\nTempo: ${tempo} meses\nMontante: R$ ${montante.toFixed(2)}`);
}

calcularInvestimento();