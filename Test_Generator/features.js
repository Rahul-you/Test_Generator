// script.js

let questions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

function addQuestion() {
    const question = document.getElementById('question').value;
    const options = [
        document.getElementById('option1').value,
        document.getElementById('option2').value,
        document.getElementById('option3').value,
        document.getElementById('option4').value
    ];
    const correctOption = parseInt(document.getElementById('correct-option').value) - 1;

    if (question && options.every(option => option) && correctOption >= 0 && correctOption < 4) {
        questions.push({ question, options, correctOption });
        displayTestPreview();
    } else {
        alert('Please fill all fields correctly.');
    }
}

function displayTestPreview() {
    const previewDiv = document.getElementById('test-preview');
    previewDiv.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.innerHTML = `<strong>Q${index + 1}:</strong> ${q.question}<br>
            ${q.options.map((opt, i) => `<input type="radio" name="q${index}" value="${i}"> ${opt}<br>`).join('')}
            <br>`;
        previewDiv.appendChild(questionDiv);
    });
}

function startTest() {
    document.getElementById('test-creator').style.display = 'none';
    document.getElementById('test-taking').style.display = 'block';
    displayTestTaking();
}

function displayTestTaking() {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'test-item';
        questionDiv.innerHTML = `<strong>Q${index + 1}:</strong> ${q.question}<br>
            ${q.options.map((opt, i) => `<input type="radio" name="q${index}" value="${i}"> ${opt}<br>`).join('')}
            <br>`;
        questionsDiv.appendChild(questionDiv);
    });
}

function submitTest() {
    userAnswers = questions.map((_, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        return selectedOption ? parseInt(selectedOption.value) : -1;
    });

    const score = questions.reduce((total, q, index) => total + (userAnswers[index] === q.correctOption ? 1 : 0), 0);
    document.getElementById('result').innerText = `You scored ${score} out of ${questions.length}`;
}

