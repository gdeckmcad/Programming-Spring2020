
let heading;
let submit;
let reset;
let input;
let questionInput;
let currentQuestion;
let response;
let responseColor = '#52FFB8';
let statements = [
{question: 'Where is the Great Pyramid of Giza?', answer:'Egypt'},
{question: 'Which planet in our Solar System is known for having a ring?', answer:'Saturn'},
{question: 'What kind of tree do acorns come from?', answer:'Oak'},
{question: 'What is the part of the human eye that controls the amount of light that passes through the pupil?', answer:'the iris'},
{question: 'How many great lakes are there?', answer:'Five'},
]

//alerting user they won the quiz
function next () {
    if(statements.length < 1) {
        alert('you won');
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
    text(message, 100, 300);
}

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
        response = 'oops, that wasn\'t quite right! Try another';
        responseColor = 'red';
    }
}

//displaying 
function sayMessage(){
    message = input.value();
    input.value('');
}

//styling and dom elements
function setup () {
    createCanvas(800, 600);
    background('#D0FEF5');
    heading = createElement('h1', 'Grace\'s Quiz Game');
    heading.position(100, 200);
    submit = createButton('Submit');
    submit.size(100,32);
    submit.position(450, 375);
    submit.mousePressed(sayMessage);
    input = createInput('');
    input.size(450, 32)
    input.position(100, 325);
    reset = createButton('Start over');
    reset.size(100,32);
    reset.position(100, 375);
    reset.mousePressed('');
}