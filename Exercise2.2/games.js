// Array with 3 of my favorite games as objects, each object should have the same 4 properties
const games = [
    {name: 'Cards Against Humanity', numberOfPlayers: 4, rating:5, type:'card game'},
    {name: 'Taboo Midnight', numberOfPlayers: 4, rating:4, type:'buzzer game'},
    {name: 'The Game of Life Quarter Life Crisis', numberOfPlayers:2, rating:4, type:'board game'},
];

//Prompt user to select a random number
let randomIdx = prompt('I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game');

if (randomIdx > 3) {
    window.alert('Please choose a number between 1 and 3');
} else {
    console.log('You selected' + ' ' + games[randomIdx - 1].name + ', ' + 'which is a' + ' ' + games[randomIdx - 1].type + ' ' + 'that has a rating of' + ' ' + games[randomIdx - 1].rating + ' ' + 'and that needs at least' + ' ' + games[randomIdx -1].numberOfPlayers + ' ' + 'players' + '.');
    window.alert ('You selected' + ' ' + games[randomIdx - 1].name + ', ' + 'which is a' + ' ' + games[randomIdx - 1].type + ' ' + 'that has a rating of' + ' ' + games[randomIdx -1].rating + ' ' + 'and that needs at least' + ' ' + games[randomIdx - 1].numberOfPlayers + ' ' + 'players' + '.')
}