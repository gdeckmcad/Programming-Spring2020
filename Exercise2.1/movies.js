// My five favorite movies
const myMovies = ['Royal Tenenbaums', 'Lost in Translation', 'Flakes', 'Troop Beverly Hills', 'Booksmart'];
console.log(myMovies);

//Asking user for their favorite movie
let userMovie = prompt('What is your favorite movie?');
console.log(userMovie);

//Adding their favorite movie to my array using push
myMovies.push(userMovie);

//Displaying full list with toString method
console.log(myMovies.toString());