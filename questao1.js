function calcularAnosParaUltrapassar() {
    let populacaoA = 80000;
    let populacaoB = 200000;
    let taxaCrescimentoA = 0.03;
    let taxaCrescimentoB = 0.015;
    let anos = 0;
    
    while (populacaoA < populacaoB) {
        populacaoA += populacaoA * taxaCrescimentoA;
        populacaoB += populacaoB * taxaCrescimentoB;
        anos++;
        console.log(`Ano ${anos}: País A = ${populacaoA.toFixed(0)}, País B = ${populacaoB.toFixed(0)}`);
    }
    
    return anos;
}

const anosNecessarios = calcularAnosParaUltrapassar();
console.log(`Serão necessários ${anosNecessarios} anos para a população do país A ultrapassar ou igualar a do país B.`);