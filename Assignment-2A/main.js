// Create an array objects that represent a question and answer. The object should include a question property ("question" as the key and the actual question as the value) and an answer property ("answer" as the key with the actual answer as the value).
const questionArray = [
    {question: 'Where is the Great Pyramid of Giza?', answer:'Egypt'},
    {question: 'Which planet in our Solar System is known for having a ring?', answer:'Saturn'},
    {question: 'What kind of tree do acorns come from?', answer:'Oak'},
    {question: 'What is the part of the human eye that controls the amount of light that passes through the pupil?', answer:'The iris'},
    {question: 'How many great lakes are there?', answer:'Five'},
];

//A random question prompt should appear when the page loads. The question prompt should include the value of the question. The user will respond with their guess.
let randomIdx = prompt('I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game');

if (randomIdx > 3) {
    window.alert('Please choose a number between 1 and 3');
} else {
    console.log('You selected' + ' ' + games[randomIdx - 1].name + ', ' + 'which is a' + ' ' + games[randomIdx - 1].type + ' ' + 'that has a rating of' + ' ' + games[randomIdx - 1].rating + ' ' + 'and that needs at least' + ' ' + games[randomIdx -1].numberOfPlayers + ' ' + 'players' + '.');
    window.alert ('You selected' + ' ' + games[randomIdx - 1].name + ', ' + 'which is a' + ' ' + games[randomIdx - 1].type + ' ' + 'that has a rating of' + ' ' + games[randomIdx -1].rating + ' ' + 'and that needs at least' + ' ' + games[randomIdx - 1].numberOfPlayers + ' ' + 'players' + '.')
}