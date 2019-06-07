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
});
buttons[1].addEventListener('mouseleave', function(event) {
    event.target.style.backgroundColor = 'orange';
});
buttons[2].addEventListener('mouseleave', function(event) {
    event.target.style.backgroundColor = 'red';
});

//Event Listeners--3--dblclick
const dblImg = document.querySelector('.img-content img');
dblImg.addEventListener('dblclick', function(event) {
    event.preventDefault();
    alert('SIGN UP NOWWWWW!!!!!');
});

//Event Listeners--4--drag
const funDrag = document.querySelector('.content-destination h2');
funDrag.addEventListener('drag', function(event) {
    alert('DRAGGG!!');
});

//Event Listeners--5--mouseenter
const footer = document.querySelector('.footer p');
footer.addEventListener('mouseenter', function(event) {
    footer.style.color = 'green';
});

//Event Listeners--6--mouseout
const out = document.querySelector('.footer p');
out.addEventListener('mouseleave', function(event) {
    event.target.style.color = 'purple';
});

//Event Listeners--7--mousedown
const photoDown = document.querySelector('.img-content img');
photoDown.addEventListener('mousedown', function (event) {
    photoDown.style.width = '300px';
});

