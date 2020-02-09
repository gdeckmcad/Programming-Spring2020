
const questionArray = [
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


//window.alert('You answered' + ' ' + userFirstAnswer + '.' + ' ' + 'The correct answer was' + ' ' + firstAnswer);