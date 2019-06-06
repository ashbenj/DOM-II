// Your code goes here
//Event Listeners---mouseover
const buttons = document.querySelectorAll('.btn');
buttons[0].addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'aqua'
})
buttons[1].addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'yellow'
})
buttons[2].addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'grey'
})