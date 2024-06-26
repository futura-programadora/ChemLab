
const questions = [
    { question: "Qual é o símbolo químico do elemento ouro?", options: ["Ag", "Au", "Pb", "Pt"], correctAnswer: 1 },

    { question: "Qual elemento químico tem o número atômico 1?", options: [" Hélio", "Lítio", "Hidrogênio", "Berílio"], correctAnswer: 2 },

    { question: "Que elemento é conhecido como o metal líquido à temperatura ambiente?", options: [" Ferro", "Mercúrio", "Cobre", " Alumínio"], correctAnswer: 1 },

    { question: "Qual elemento é o mais abundante na crosta terrestre?", options: ["Silício", "Alumínio", "Oxigênio", " Ferro"], correctAnswer: 2 },

    { question: "Qual é o símbolo do elemento ferro?", options: ["Fe", "F", "Fr", "Fb"], correctAnswer: 0 },

    { question: "Qual é o nome do elemento com o símbolo químico K?", options: ["Cálcio", "Potássio", "Criptônio", "Cobalto"], correctAnswer: 1 },

    { question: " Qual elemento é usado na fabricação de baterias de íon-lítio?", options: [" Sódio", "Potássio", "Lítio", "Magnésio"], correctAnswer: 2 },

    { question: " Qual elemento químico tem o número atômico 6?", options: ["Nitrogênio", "Carbono", "Oxigênio", "Boro"], correctAnswer: 1 },
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
});

function displayQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    let options = document.getElementById('options');
    options.innerHTML = ''; // Limpa opções anteriores
    question.options.forEach((option, index) => {
        let li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => chooseOption(index));
        options.appendChild(li);
    });
}

function chooseOption(index) {
    let question = questions[currentQuestionIndex];
    let resultElement = document.getElementById('result');
    let scoreElement = document.getElementById('score');
    let answerResultElement = document.getElementById('answer-result');
    if (index === question.correctAnswer) {
        score += 2;
        answerResultElement.textContent = "Correto!";
        answerResultElement.style.color = "green";
        let options = document.getElementById('options');
        options.childNodes.forEach((child, i) => {
            if (i === index) {
                child.style.backgroundColor = "#892CDC"; // Destaca opção correta em #892CDC
            } else {
                child.style.pointerEvents = "none"; // Desativa clique nas opções após selecionar
            }
        });
    } else {
        answerResultElement.textContent = "Incorreto!";
        answerResultElement.style.color = "red";
        let options = document.getElementById('options');
        options.childNodes.forEach((child, i) => {
            if (i === question.correctAnswer) {
                child.style.backgroundColor = "#892CDC"; // Destaca opção correta em #892CDC
            } else if (i === index) {
                child.style.backgroundColor = "red"; // Destaca opção incorreta em vermelho
            }
            child.style.pointerEvents = "none"; // Desativa clique nas opções após selecionar
        });
    }
    document.getElementById('score-value').textContent = score; // Atualiza a pontuação exibida
    resultElement.style.display = 'block'; // Exibe o resultado da resposta
    scoreElement.style.display = 'none'; // Oculta a pontuação até o final
    setTimeout(showNextQuestion, 2000); // Chama a próxima questão após 2 segundos
}

function showNextQuestion() {
    currentQuestionIndex++;
    let resultElement = document.getElementById('result');
    let scoreElement = document.getElementById('score');
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        resultElement.style.display = 'none'; // Oculta o resultado da resposta anterior
    } else {
        scoreElement.textContent = `Quiz finalizado, Pontuação final: ${score} pontos`; // Exibe o resultado final
        resultElement.style.display = 'none'; // Oculta o resultado da última resposta
        scoreElement.style.display = 'block'; // Exibe a pontuação final
    }
}

