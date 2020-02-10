
let heading;
let submit;
let reset;
let input;
let currentQuestion;
let response;
let description;
let responseColor;
let statements = [
{question: 'Where is the Great Pyramid of Giza?', answer:'egypt'},
{question: 'Which planet in our Solar System is known for having a ring?', answer:'saturn'},
{question: 'What kind of tree do acorns come from?', answer:'oak'},
{question: 'What is the part of the human eye that controls the amount of light that passes through the pupil?', answer:'iris'},
{question: 'How many great lakes are there?', answer:'five'},
]

//alerting user they won the quiz
function next () {
    if(statements.length < 1) {
        alert('Congratulations! You got all five questions correct!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}


currentQuestion = next();
let message = currentQuestion.question;

//displaying question above input
function draw () {
    background('#D0FEF5');
    textSize(14);
    fill('#4A051C');
    text(message, 100, 310);
    fill(responseColor);
    text(response, 100, 450);
}

//validating answers, and filtering out correctly answered questions and grabbing a new one
function checkQuestion() {
    if (currentQuestion.answer === input.value()) {
        //remove correct answer from array
        statements = statements.filter(statementsObj => {
            return currentQuestion.answer !== statementsObj.answer;
        });
        //this is the correct condition
        response = 'You got it right!';
        responseColor = 'green';
    } else {
        //this is the wrong answer condition
        response = 'Oops, that wasn\'t quite right! Try another question';
        responseColor = 'red';
        wrongAnswer = 
    }
    currentQuestion = next(); 
    input.value('')
    if(currentQuestion) {
        message = currentQuestion.question;
    }
}

function refresh() {
    clear();
}

//styling and dom elements
function setup () {
    createCanvas(800, 600);
    background('#D0FEF5');
    heading = createElement('h1', 'Grace\'s Quiz Game');
    heading.position(100, 200);
    description = createElement('body', 'answers should be in all lowercase plain text');
    description.position(100,260);
    submit = createButton('Submit');
    submit.size(100,32);
    submit.position(450, 375);
    submit.mousePressed(checkQuestion);
    input = createInput('');
    input.size(450, 32)
    input.position(100, 330);
    reset = createButton('Start over');
    reset.size(100,32);
    reset.position(100, 375);
    reset.mousePressed(refresh);
}