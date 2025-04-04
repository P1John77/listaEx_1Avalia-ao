function calcularCirculo() {
    let raio = parseFloat(prompt("Digite o raio do círculo:"));
    
    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, digite um valor válido maior que zero.");
        return;
    }
    
    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;
    
    alert(`Para um círculo de raio ${raio}:\n\nÁrea: ${area.toFixed(2)}\nPerímetro: ${perimetro.toFixed(2)}`);
    console.log(`Raio: ${raio}\nÁrea: ${area.toFixed(2)}\nPerímetro: ${perimetro.toFixed(2)}`);
}

calcularCirculo();