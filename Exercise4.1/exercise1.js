// select empty div and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h1 inside of it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Llama\'s communicate by humming';
//Add event listener
heading.addEventListener('click', handleHeadingClick);
//need to attach it to the DOM with append child
myEmptyDiv.appendChild(heading);

// can pass in a new or anonymous function to event listener 
function handleHeadingClick (){
    console.log('heading has been clicked');
}