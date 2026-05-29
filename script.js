// Banco de dados com 10 perguntas e dicas personalizadas para erros
const bancoQuestoes = [
    {
        pergunta: "1. Qual técnica de irrigação reduz o desperdício de água no campo entregando gotas diretamente na raiz?",
        alternativas: ["Irrigação por sulco", "Pivô central tradicional", "Sistema de gotejamento", "Aspersão de alta pressão"],
        correta: 2,
        dica: "💡 Dica de Sustentabilidade: O gotejamento economiza até 60% de água comparado aos métodos de inundação, evitando a evaporação excessiva."
    },
    {
        pergunta: "2. O que acontece com o solo quando plantamos a mesma cultura (monocultura) consecutivamente sem descanso?",
        alternativas: ["O solo ganha mais nitrogênio", "Ocorre o esgotamento de nutrientes específicos", "O solo fica imune a pragas", "Aumenta a umidade natural da terra"],
        correta: 1,
        dica: "💡 Dica de Agronomia: A monocultura esgota a terra. Praticar a rotação de culturas (como alternar soja e milho) recupera a saúde biológica do solo."
    },
    {
        pergunta: "3. Qual a função principal da compostagem na gestão de resíduos da fazenda?",
        alternativas: ["Queimar restos vegetais", "Transformar matéria orgânica em adubo rico", "Filtrar defensivos na água", "Compactar solos arenosos"],
        correta: 1,
        dica: "💡 Dica Ambiental: A compostagem recicla cascas, esterco e palha, reduzindo lixo e substituindo fertilizantes químicos poluentes."
    },
    {
        pergunta: "4. Por que as abelhas e polinizadores são considerados vitais para a produção de alimentos?",
        alternativas: ["Eles controlam a temperatura do ar", "Eles eliminam plantas daninhas", "Eles garantem a reprodução e frutos de grande parte das culturas", "Eles produzem oxigênio para as plantas"],
        correta: 2,
        dica: "💡 Dica Biológica: Mais de 70% das culturas agrícolas dependem de polinizadores. Reduzir pesticidas químicos fortes protege esses aliados."
    },
    {
        pergunta: "5. O que define a prática da 'Floresta em Pé' ou Sistemas Agroflorestais (SAFs)?",
        alternativas: ["Desmatar para dar espaço ao pasto puro", "Plantar árvores nativas consorciadas com alimentos", "Utilizar apenas sementes artificiais", "Cercar a fazenda com muros de concreto"],
        correta: 1,
        dica: "💡 Dica Agroflorestal: Produzir comida sob a sombra de árvores nativas mantém a biodiversidade, protege o solo e gera créditos de carbono."
    },
    {
        pergunta: "6. Qual fonte de energia renovável é ideal para movimentar bombas de água em áreas rurais isoladas?",
        alternativas: ["Gerador a gasolina", "Energia Solar Fotovoltaica", "Carvão vegetal", "Baterias de chumbo descartáveis"],
        correta: 1,
        dica: "💡 Dica de Energia: Painéis solares convertem luz solar em eletricidade limpa para bombear água, eliminando gastos com combustíveis fósseis."
    },
    {
        pergunta: "7. O que causa a compactação severa do solo agrícola impossibilitando o crescimento de raízes?",
        alternativas: ["O tráfego excessivo de maquinário pesado sobre terra úmida", "A presença excessiva de minhocas", "O plantio de árvores frutíferas", "A cobertura morta com palha"],
        correta: 0,
        dica: "💡 Dica de Manejo: Evite passar tratores pesados quando o solo estiver muito encharcado. Use o plantio direto para manter a estrutura fofa."
    },
    {
        pergunta: "8. Qual destas ações ajuda diretamente a evitar o processo de assoreamento (acúmulo de terra) nos rios do campo?",
        alternativas: ["Retirar as pedras do fundo", "Preservar a Mata Ciliar (vegetação nas margens)", "Canalizar a água em tubos plásticos", "Retirar toda a grama ao redor"],
        correta: 1,
        dica: "💡 Dica Hidrográfica: As raízes da Mata Ciliar funcionam como redes que seguram a terra das margens, evitando que a chuva jogue lama nos rios."
    },
    {
        pergunta: "9. O que são bioinsumos na agricultura moderna?",
        alternativas: ["Combustíveis para tratores híbridos", "Produtos feitos de microrganismos vivos para combater pragas e nutrir", "Agrotóxicos ultraconcentrados", "Sistemas de irrigação computadorizados"],
        correta: 1,
        dica: "💡 Dica Tecnológica: Bioinsumos usam fungos ou bactérias do bem para combater pragas naturais, reduzindo o impacto químico na nossa comida."
    },
    {
        pergunta: "10. Qual a principal vantagem do método de Plantio Direto?",
        alternativas: ["Revolver a terra com arado todos os meses", "Plantar sementes sobre a palha da colheita anterior sem arar", "Usar o dobro de água na rega", "Remover totalmente os restos orgânicos do solo"],
        correta: 1,
        dica: "💡 Dica de Conservação: O plantio direto mantém o solo coberto com a palha antiga. Isso conserva a umidade, diminui o calor na terra e evita a erosão."
    }
];

// Variáveis de Controle do Estado do App
let indiceAtual = 0;
let pontuacao = 0;
let respondeu = false;

// Elementos do DOM
const telaInicio = document.getElementById("tela-inicio");
const telaJogo = document.getElementById("tela-jogo");
const telaFinal = document.getElementById("tela-final");

const textoPergunta = document.getElementById("texto-pergunta");
const containerAlternativas = document.getElementById("container-alternativas");
const infoProgresso = document.getElementById("info-progresso");
const barraPreenchimento = document.getElementById("barra-preenchimento");

const painelFeedback = document.getElementById("painel-feedback");
const tituloFeedback = document.getElementById("titulo-feedback");
const textoDica = document.getElementById("texto-dica");

// Ouvintes de Eventos Iniciais
document.getElementById("btn-comecar").addEventListener("click", iniciarSimulador);
document.getElementById("btn-proxima").addEventListener("click", avançarQuestao);
document.getElementById("btn-reiniciar").addEventListener("click", reiniciarSimulador);

function iniciarSimulador() {
    telaInicio.classList.add("hidden");
    telaJogo.classList.remove("hidden");
    indiceAtual = 0;
    pontuacao = 0;
    carregarQuestao();
}

function carregarQuestao() {
    respondeu = false;
    painelFeedback.classList.add("hidden");
    containerAlternativas.innerHTML = "";
    
    const questaoAtual = bancoQuestoes[indiceAtual];
    textoPergunta.textContent = questaoAtual.pergunta;
    
    // Atualizar Barra de Progresso
    infoProgresso.textContent = `Pergunta ${indiceAtual + 1} de ${bancoQuestoes.length}`;
    const porcentagem = ((indiceAtual) / bancoQuestoes.length) * 100;
    barraPreenchimento.style.width = `${porcentagem}%`;

    // Gerar Botões de Alternativas
    questaoAtual.alternativas.forEach((texto, index) => {
        const botao = document.createElement("button");
        botao.textContent = texto;
        botao.classList.add("btn-opcao");
        botao.addEventListener("click", () => verificarResposta(index, botao));
        containerAlternativas.appendChild(botao);
    });
}

function verificarResposta(indiceSelecionado, botaoClicado) {
    if (respondeu) return; // Evita multiplos cliques na mesma questão
    respondeu = true;

    const questaoAtual = bancoQuestoes[indiceAtual];
    const botoes = containerAlternativas.querySelectorAll(".btn-opcao");

    // Desativa hover de todos os botões após a escolha
    botoes.forEach(b => b.style.pointerEvents = "none");

    if (indiceSelecionado === questaoAtual.correta) {
        botaoClicado.classList.add("correta");
        pontuacao++;
        
        // Exibir Feedback Positivo
        painelFeedback.className = "feedback-box sucesso";
        tituloFeedback.textContent = "🎯 Resposta Correta!";
        textoDica.textContent = "Excelente escolha. Seu conhecimento ajuda a construir um ecossistema equilibrado.";
    } else {
        botaoClicado.classList.add("errada");
        // Mostra qual era a alternativa correta em verde
        botoes[questaoAtual.correta].classList.add("correta");
        
        // Exibir Feedback de Erro + Dica Customizada
        painelFeedback.className = "feedback-box erro";
        tituloFeedback.textContent = "❌ Não foi dessa vez...";
        textoDica.textContent = questaoAtual.dica;
    }

    painelFeedback.classList.remove("hidden");
}

function avançarQuestao() {
    indiceAtual++;
    if (indiceAtual < bancoQuestoes.length) {
        carregarQuestao();
    } else {
        finalizarSimulador();
    }
}

function finalizarSimulador() {
    telaJogo.classList.add("hidden");
    telaFinal.classList.remove("hidden");
    
    document.getElementById("pontuacao-final").textContent = pontuacao;
    const msgFinal = document.getElementById("mensagem-final");

    if (pontuacao >= 8) {
        msgFinal.textContent = "🌱 Incrível! Você possui uma excelente percepção sustentável e práticas admiráveis de agronomia consciente. Parabéns!";
    } else if (pontuacao >= 5) {
        msgFinal.textContent = "🌾 Bom trabalho! Você conhece as bases da preservação, mas aplicar mais as dicas recebidas reduzirá ainda mais seu impacto.";
    } else {
        msgFinal.textContent = "⚠️ Atenção Ecológica! Suas respostas indicam uma alta pegada ambiental. Use as dicas apresentadas no simulador para repensar hábitos cotidianos.";
    }
}

function reiniciarSimulador() {
    telaFinal.classList.add("hidden");
    telaInicio.classList.remove("hidden");
}
