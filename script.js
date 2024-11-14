let quizData = [
    {
        question: "Qual é o principal uso do primer na maquiagem?",
        options: ["Para fixar o batom", "Uniformizar a pele e melhorar a fixação da maquiagem", "Para fazer contorno", "Para hidratar a pele"],
        answer: 1
    },
    {
        question: "Qual desses produtos é utilizado para cobrir manchas e olheiras?",
        options: ["Base", "Corretivo", "Blush", "Pó translúcido"],
        answer: 1
    },
    {
        question: "O que é contorno na maquiagem?",
        options: ["Realçar as sobrancelhas", "Escurecer áreas para criar sombra no rosto", "Aplicar cores vivas nas pálpebras", "Passar batom"],
        answer: 1
    },
    {
        question: "Qual a função do iluminador?",
        options: ["Deixar a maquiagem mais natural", "Destacar certas áreas do rosto, como maçãs do rosto e ponta do nariz", "Cobrir imperfeições", "Dar mais volume aos lábios"],
        answer: 1
    },
    {
        question: "Qual a melhor maneira de aplicar batom?",
        options: ["Com o dedo", "Com pincel", "Com pincel ou diretamente nos lábios", "Com cotonete"],
        answer: 2
    }
];

let currentQuestion = 0;
let userAnswers = [];

function startQuiz() {
    document.getElementById('mission').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    let quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <p><strong>${quizData[currentQuestion].question}</strong></p>
        <ul class="list-group">
            ${quizData[currentQuestion].options.map((option, index) => `
                <li class="list-group-item">
                    <button class="btn btn-light" onclick="selectAnswer(${index})">${option}</button>
                </li>
            `).join('')}
        </ul>
    `;
}

function selectAnswer(selectedOption) {
    userAnswers[currentQuestion] = selectedOption;
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    let score = 0;
    for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].answer) {
            score++;
        }
    }

    let resultMessage = `Você acertou ${score} de ${quizData.length} perguntas.`;
    let resultContent = `
        <h3>Resultado</h3>
        <p>${resultMessage}</p>
        <button class="btn btn-primary" onclick="location.reload()">Reiniciar Quiz</button>
    `;
    document.getElementById('quiz-content').innerHTML = resultContent;
}
