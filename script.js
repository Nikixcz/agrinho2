document.addEventListener("DOMContentLoaded", function () {
    
    // --- LÓGICA DA CALCULADORA DE ÁGUA ---
    const btnCalcular = document.getElementById("btn-calcular");
    const inputDias = document.getElementById("dias");
    const campoResultado = document.getElementById("resultado");

    btnCalcular.addEventListener("click", function () {
        const dias = parseInt(inputDias.value);

        // Validação simples para garantir preenchimento correto
        if (isNaN(dias) || dias < 1 || dias > 7) {
            campoResultado.textContent = "⚠️ Por favor, insira um número válido de dias (de 1 a 7).";
            campoResultado.style.backgroundColor = "#ffebee";
            campoResultado.style.color = "#c62828";
            campoResultado.classList.remove("hidden");
            return;
        }

        // Cálculo fictício baseado em dados reais (gotejamento economiza cerca de 30L por irrigação pequena)
        const economiaMensal = dias * 30 * 4; 

        campoResultado.innerHTML = `🎉 Parabéns! Mudando para gotejamento, você economiza aproximadamente <strong>${economiaMensal} litros</strong> de água por mês!`;
        campoResultado.style.backgroundColor = "#e8f5e9";
        campoResultado.style.color = "#1b5e20";
        campoResultado.classList.remove("hidden");
    });

    // --- LÓGICA DO FORMULÁRIO DE CONTATO ---
    const formulario = document.getElementById("form-news");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que a página recarregue ao enviar

        const nome = document.getElementById("nome").value;

        // Feedback de sucesso direto na tela
        alert(`Obrigado pelo interesse, ${nome}! Sua cartilha digital do Agrinho será enviada em breve.`);
        
        formulario.reset(); // Limpa as caixas de texto
    });
});
