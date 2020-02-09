
let heading;
let button;
let input;
let message = 'type something';

function sayMessage(){
    message = input.value();
    input.value('');
}

function setup () {
    createCanvas(800, 600);
    background('#D0FEF5');
    heading = createElement('h1', 'Graces Quiz Game');
    heading.position(100, 200);
    button = createButton('submit');
    button.size(100,16);
    button.position(100, 300);
    button.mousePressed(sayMessage);
    input = createInput('');
    input.position(100, 275);
}

function draw () {
    background('#D0FEF5');
    textSize(18);
    fill('#4A051C');
    text(message, 100, 400);
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