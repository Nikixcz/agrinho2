document.addEventListener("DOMContentLoaded", function () {

    // === [TÓPICO 2] LÓGICA DA CALCULADORA DE ÁGUA ===
    const btnAgua = document.getElementById("btn-agua");
    btnAgua.addEventListener("click", function () {
        const minutos = parseInt(document.getElementById("minutos").value);
        const resAgua = document.getElementById("res-agua");

        if (isNaN(minutos) || minutos <= 0) {
            exibirResultado(resAgua, "⚠️ Por favor, insira um número válido de minutos.", "#ffebee", "#c62828");
            return;
        }

        // Uma mangueira tradicional gasta aprox. 15L por minuto. O gotejamento consome apenas 2L.
        const consumoTradicional = minutos * 15 * 7; 
        const consumoGotejamento = minutos * 2 * 7;
        const economiaSemanal = consumoTradicional - consumoGotejamento;

        exibirResultado(resAgua, `💧 Numa irrigação comum você gastaria ${consumoTradicional}L por semana. Com o gotejamento, você gasta apenas ${consumoGotejamento}L. Economia de ${economiaSemanal} litros semanais!`, "#e8f5e9", "#1b5e20");
    });


    // === [TÓPICO 3] LÓGICA DO QUIZ WEB ===
    const btnQuiz = document.getElementById("btn-quiz");
    btnQuiz.addEventListener("click", function () {
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const resQuiz = document.getElementById("res-quiz");

        if (!q1 || !q2) {
            exibirResultado(resQuiz, "⚠️ Responda todas as perguntas antes de enviar!", "#fff3e0", "#e65100");
            return;
        }

        let pontos = 0;
        if (q1.value === "certo") pontos++;
        if (q2.value === "certo") pontos++;

        if (pontos === 2) {
            exibirResultado(resQuiz, "🏆 Excelente! Você acertou 2/2. Conhecimento nota 10 em sustentabilidade!", "#e8f5e9", "#1b5e20");
        } else {
            exibirResultado(resQuiz, `🌱 Bom esforço! Você acertou ${pontos}/2. Continue estudando para proteger nosso ecossistema!`, "#fff3e0", "#e65100");
        }
    });


    // === [TÓPICO 5] LÓGICA DO SIMULADOR DE PEGADA AMBIENTAL ===
    const btnPegada = document.getElementById("btn-pegada");
    btnPegada.addEventListener("click", function () {
        const rotina = document.getElementById("rotina").value;
        const resPegada = document.getElementById("res-pegada");

        if (rotina === "alta") {
            exibirResultado(resPegada, "🚨 Pegada Alta: Enviar orgânicos para o lixo comum gera gás metano nos aterros. Que tal propor a criação de uma composteira na escola ou fazenda?", "#ffebee", "#c62828");
        } else if (rotina === "media") {
            exibirResultado(resPegada, "⚠️ Pegada Média: Queimar resíduos polui o ar e destrói nutrientes. Tente mudar para a compostagem total!", "#fff3e0", "#e65100");
        } else {
            exibirResultado(resPegada, "🌿 Pegada Baixa! Sensacional. A compostagem nutre o solo de forma natural e limpa. Você é um exemplo!", "#e8f5e9", "#1b5e20");
        }
    });


    // Função auxiliar para simplificar a exibição dos resultados em tela
    function exibirResultado(elemento, texto, corFundo, corTexto) {
        elemento.innerHTML = texto;
        elemento.style.backgroundColor = corFundo;
        elemento.style.color = corTexto;
        elemento.classList.remove("hidden");
    }
});
