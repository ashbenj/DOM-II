// Your code goes here

//Event Listeners---1--mouseover
const buttons = document.querySelectorAll('.btn');
buttons[0].addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'aqua'
});
buttons[1].addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'yellow'
});
buttons[2].addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'grey'
});

//Event Listeners--2--mouseleave
buttons[0].addEventListener('mouseleave', function(event) {
    event.target.style.backgroundColor = 'blue';
})
buttons[1].addEventListener('mouseleave', function(event) {
    event.target.style.backgroundColor = 'orange';
})
buttons[2].addEventListener('mouseleave', function(event) {
    event.target.style.backgroundColor = 'red';
})
