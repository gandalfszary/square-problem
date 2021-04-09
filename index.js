let yellow = document.querySelector('.square--yellow')
let red = document.querySelector('.square--red')
let blue = document.querySelector('.square--blue')
let green = document.querySelector('.square--green')

let but = document.querySelector('.clicker')



but.addEventListener('click', function() {
    // console.log('siema')
    yellow.classList.toggle('square--red');
    red.classList.toggle('square--blue');
    blue.classList.toggle('square--green');
    green.classList.toggle('square--yellow');

    // if (green.classList = 'square--yellow') {

    //     green.classList.remove('square--green')
    //     green.classList.add('square--yellow')

    // } else {

    //     green.classList.add('square--yellow')

    // }


})