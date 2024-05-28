const questions = [
    { question: "Qual é o produto da reação de combustão completa do metano", options: [" H₂O e CO", "CO₂ e H₂O", "CO e H₂", "C e H₂O"], correctAnswer: 1 },

    { question: "Qual é a equação balanceada da reação entre hidrogênio (H₂) e oxigênio (O₂) para formar água (H₂O)?", options: [" 2H₂ + O₂ → 2H₂O", "H₂ + O₂ → H₂O", " H₂ + 2O₂ → 2H₂O", " 2H₂ + O₂ → H₂O"], correctAnswer: 0 },

    { question: "Na reação de neutralização entre ácido clorídrico (HCl) e hidróxido de sódio (NaOH), quais são os produtos?", options: ["NaCl e H₂", "NaCl e H₂O", "NaOH e HCl", "H₂O e O₂"], correctAnswer: 1 },

    { question: "Qual é o reagente limitante na reação entre 1 mol de H₂ e 1 mol de O₂?", options: [" H₂", "O₂", " H₂O", "Ambos são limitantes"], correctAnswer: 1 },

    { question: " Qual é a equação balanceada da decomposição do peróxido de hidrogênio (H₂O₂) em água e oxigênio?", options: [" 2H₂O₂ → 2H₂O + O₂", "H₂O₂ → H₂O + O₂", "H₂O₂ → H₂ + O₂", " 2H₂O₂ → H₂O + O₂"], correctAnswer: 0 },

    { question: "Qual é o produto principal da reação de ácido sulfúrico (H₂SO₄) com zinco (Zn)?", options: ["ZnO e H₂", "ZnSO₄ e H₂O", " ZnO e H₂O", " ZnSO₄ e H₂"], correctAnswer: 3},

    { question: "Qual é a equação balanceada da reação entre alumínio (Al) e cloro (Cl₂) para formar cloreto de alumínio (AlCl₃)?", options: ["2Al + Cl₂ → 2AlCl₃", "Al + Cl₂ → AlCl₃", "2Al + 3Cl₂ → 2AlCl₃", "Al + 3Cl₂ → AlCl₃"], correctAnswer: 2 },

    { question: "Na reação de síntese do amoníaco (NH₃) a partir de nitrogênio (N₂) e hidrogênio (H₂), qual é a equação balanceada?", options: [" N₂ + H₂ → NH₃", "2N₂ + 3H₂ → 2NH₃", "N₂ + 3H₂ → NH₃", " N₂ + 3H₂ → 2NH₃"], correctAnswer: 3 }
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