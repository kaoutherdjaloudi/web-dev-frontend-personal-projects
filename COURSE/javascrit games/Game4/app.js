document.addEventListener('DOMContentLoaded',()=>{
   const squares = document.querySelectorAll('.grid div')
   const scoreDisplay = document.querySelector('span')
   const  startBtn = document.querySelector('.start')
   const width = 10

   let currentIndex = 0 //first div in our grid
   let appleIndex = 0 //so first div in our grid
   let currentSnake = [2,1,0] // the div in our grid being 2(the head) & 0 being the tail with all 1's being the body.
   let direction = 1
   let score = 0
   let speed = 0.8
   let intervalTime = 0
   let interval = 0

   // functions code

   // fuction to start the game
   function startGame(){
       currentSnake.forEach(index => squares[index].classList.remove('snake'))
       squares[appleIndex].classList.remove('apple')
       clearInterval(interval)
       score = 0
       randomApple()
       direction = 1
       scoreDisplay.innerText = score
       intervalTime= 1000
       currentSnake=[2,1,0]
       currentIndex=0
       currentSnake.forEach(index => squares[index].classList.add('snake'))
       interval = setInterval(moveOutcomes, intervalTime)
   }
   // function that deals with all the over outcomes of the snake
   function moveOutcomes(){

   //deals with snake hitting borders or hitting her self

   if ( (currentSnake[0]+width >= (width*width) && direction===width) || //for bottom wall
        (currentSnake[0]%width === width-1 && direction === 1 ) || //if it hits the right wall
        (currentSnake[0]%width === 0 && direction === -1 ) || //if snake hits left wall
        (currentSnake[0]-width < 0 && direction === -width)|| //if snake hits the top
        squares[currentSnake[0]+ direction].classList.contains('snake'))//if snack hits it self)
       {
           return clearInterval(interval) // this will clear the interval 
       }

       const tail = currentSnake.pop() // remove the last ite of the array and shows it
       squares[tail].classList.remove('snake') // remove the class of snake from tail
       currentSnake.unshift(currentSnake[0] + direction) // gives direction to the head of the array
   
       //deals with snake eating apple
       if(squares[currentSnake[0]].classList.contains('apple')){
        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        randomApple()
        score++
        scoreDisplay.innerText = score
        clearInterval(interval)
        intervalTime = intervalTime*speed
        interval = setInterval(moveOutcomes, intervalTime)
       }
       squares[currentSnake[0]].classList.add('snake')

   }
   //generate new apple once the old one is eaten
   function randomApple(){
       do{
           appleIndex = Math.floor(Math.random() * squares.length)
       } while( squares[appleIndex].classList.contains('snake'))
       squares[appleIndex].classList.add('apple')
   }
   // control function code
   function control(e){
       squares[currentIndex].classList.remove('snake') // moving the class of snake from all the squares

       if(e.keyCode === 39){
           direction = 1 // if we press the right arrow on the keyboard the snake will go right
       } else if (e.keyCode === 38){
           direction = -width // if we press the up arrow, the snake will go up
       } else if (e.keyCode === 37){
           direction = -1 // if we press the left arrow, the snake will go left
       }else if (e.keyCode === 40){
           direction = width // if we press the down arrow, the snake will go down
       }
   }
   document.addEventListener('keyup', control)
   startBtn.addEventListener('click', startGame)


})