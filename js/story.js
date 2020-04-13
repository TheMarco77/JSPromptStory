// 1. Declare variables and capture input.
// ask for adjective
const adjective = prompt('Please provide an adjective.');
// ask for verb
const verb = prompt('Please provide a verb.');
// ask for noun
const noun = prompt('Please provide a noun.');

// 2. Combine the input with other words to create a story.
const story = `<p>There once was a ${adjective} programmer who wanted to use Javascript to ${verb} the ${noun}.</p>`

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story; 

console.log(story);