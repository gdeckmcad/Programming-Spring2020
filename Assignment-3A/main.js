
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
    }
}
 
function sayMessage(){
    message = input.value();
    input.value('');
}

function setup () {
    createCanvas(800, 600);
    background('#D0FEF5');
    heading = createElement('h1', 'Graces Quiz Game');
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


/*const questionArray = [
    {question: 'Where is the Great Pyramid of Giza?', answer:'Egypt'},
    {question: 'Which planet in our Solar System is known for having a ring?', answer:'Saturn'},
    {question: 'What kind of tree do acorns come from?', answer:'Oak'},
    {question: 'What is the part of the human eye that controls the amount of light that passes through the pupil?', answer:'the iris'},
    {question: 'How many great lakes are there?', answer:'Five'},
];


const randomQuestion = Math.round(Math.random() * questionArray.length-1);
const firstQuestion = window.prompt(questionArray[randomQuestion].question);
const firstAnswer = questionArray[randomQuestion].answer;
const userFirstAnswer = firstQuestion;

window.alert('You answered' + ' ' + userFirstAnswer + '.' + ' ' + 'The correct answer was' + ' ' + firstAnswer); */