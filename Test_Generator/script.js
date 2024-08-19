// script.js
document.getElementById('noteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('noteInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert(' Alert : Please upload a file ');
        return;
    }

    const reader = new FileReader();
    
    reader.onload = function (event) {
        const text = event.target.result;
        const questions = generateQuestions(text);
        displayQuestions(questions);
    };

    reader.readAsText(file);
});
document.getElementById('noteForm1').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('noteInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert(' Alert : Please upload a file ');
        return;
    }

    const reader = new FileReader();
    
    reader.onload = function (event) {
        const text = event.target.result;
        const questions = generateQuestions(text);
        displayQuestions(questions);
    };

    reader.readAsText(file);
});

function generateQuestions(text) {
    // Simple logic to generate fill-in-the-blank questions
    // In a real scenario, this should be more sophisticated
    const sentences = text.split('. ');
    const questions = sentences.map((sentence, index) => {
        const words = sentence.split(' ');
        const wordToBlank = words[Math.floor(Math.random() * words.length)];
        const question = sentence.replace(wordToBlank, '______');
        return {
            question: question,
            answer: wordToBlank
        };
    });
    return questions;
}

function displayQuestions(questions) {
    const testContainer = document.getElementById('testContainer');
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';

    questions.forEach((q, index) => {
        const questionElem = document.createElement('div');
        questionElem.className = 'question';
        questionElem.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <input type="text" id="answer${index}" placeholder="Your answer" />
        `;
        questionsDiv.appendChild(questionElem);
    });

    document.getElementById('submitAnswers').addEventListener('click', () => {
        checkAnswers(questions);
    });

    testContainer.classList.remove('hidden');
}

function checkAnswers(questions) {
    let score = 0;
    questions.forEach((q, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim();
        if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
            score++;
        }
    });

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h3>Your Score: ${score} out of ${questions.length}</h3>`;
    resultsDiv.classList.remove('hidden');
}
