// Create an array objects that represent a question and answer. The object should include a question property ("question" as the key and the actual question as the value) and an answer property ("answer" as the key with the actual answer as the value).
const questionArray = [
    {question: 'Where is the Great Pyramid of Giza?', answer:'Egypt'},
    {question: 'Which planet in our Solar System is known for having a ring?', answer:'Saturn'},
    {question: 'What kind of tree do acorns come from?', answer:'Oak'},
    {question: 'What is the part of the human eye that controls the amount of light that passes through the pupil?', answer:'the iris'},
    {question: 'How many great lakes are there?', answer:'Five'},
];

//A random question prompt should appear when the page loads. The question prompt should include the value of the question. The user will respond with their guess.
const randomQuestion = Math.round(Math.random() * questionArray.length-1);
const firstQuestion = window.prompt(questionArray[randomQuestion].question);
const firstAnswer = questionArray[randomQuestion].answer;
const userFirstAnswer = firstQuestion;

//Do not check the answer yet. Just fire an alert combining "You answered " and then the response and then add " The correct answer was " and then display the answer property from the object. Use concatenation to string all these strings together.

window.alert('You answered' + ' ' + userFirstAnswer + '.' + ' ' + 'The correct answer was' + ' ' + firstAnswer);