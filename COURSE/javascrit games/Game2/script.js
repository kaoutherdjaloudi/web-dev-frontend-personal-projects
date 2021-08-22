const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let result = 0;
let hitPosiiton;
let currentTime = timeLeft.textContent;
function randomSquare(){
    square.forEach(className => {
        className.classList.remove('mole'); });
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    //assign the id of the random position to hitpositon to us to use it later

    hitPosition = randomPosition.id;
}
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if ( id.id === hitPosition ){
            result++;
            score.textContent = result ;
        }else{
            result--;
            score.textContent= result;
        };
    })
})
 

function moveMole(){
    let timeId = null;
    timeId= setInterval(randomSquare, 1000);
}

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0){
        alert('Your Time is Over ! Your Final Score is : '+result);
        clearInterval(timeId);
    }
}

moveMole();
let timeId = setInterval(countDown, 1000);

