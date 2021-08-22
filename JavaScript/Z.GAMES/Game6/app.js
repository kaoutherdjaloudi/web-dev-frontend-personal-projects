document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('.score-display')
    const linesDisplay = document.querySelector('.lines-display')
    const startBtn = document.querySelector('.button')
    const displaySquares = document.querySelectorAll('.previous-grid div')
    let squares = Array.from(grid.querySelectorAll('div'))
    const width = 10
    let currentPosition = 4
    let timerId
    let score = 0
    let lines = 0
    let currentIndex = 0

    //assign functions to keycodes
    function control(e){
        if(e.keyCode === 39){
            moveRight()
        } else if (e.keyCode === 38){
            rotate()
        } else if(e.keyCode === 37){
            moveLeft()
        } else if(e.keyCode === 40){
            moveDown()
        }
    }
    document.addEventListener('keydown', control)

    // the tetrominoes
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1,  width*2+2]
    ] 
    const zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]
    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ]
    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]
    const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]
    
    const theTetrominoes= [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    // random selecter tetrominoes
    let random = Math.floor(Math.random()*theTetrominoes.length)
    let currentRetation = 0
    let current = theTetrominoes[random][currentRetation]

    // draw the shape 
    function draw(){
        current.forEach(index => {
            squares[currentPosition+index].classList.add('block')
        })

    }

    // undraw the shape
    function undraw(){
        current.forEach(index => (
            squares[currentPosition+index].classList.remove('block')
        ))
    }

    // move down shape
    function moveDown(){
      undraw()
      currentPosition = currentPosition +=width
      draw()
      freeze()     
    }

    startBtn.addEventListener('click', () => {
        if(timerId) {
            clearInterval(timerId)
            timerId = null
        } else{
            draw()
            timerId = setInterval(moveDown, 1000)
            nextRandom = Math.floor(Math.random()* theTetrominoes.length)
            displayShape()
        }
    })

    //move left and  prevent collisions with shapes moving left 
    function moveRight(){
        undraw()
        const isRightEdge = current.some(index=>(currentPosition+index) % width === width -1)
        if(!isRightEdge) {currentPosition+=1}
        if(current.some(index => squares[currentPosition+index].classList.contains('block2'))){currentPosition-=1}
        draw()
    }

    function moveLeft(){
        undraw()
        const isLeftEdge = current.some( index => (currentPosition + index) % width === 0)
        if(!isLeftEdge) {currentPosition-=1}
        if(current.some(index => squares[currentPosition + index].classList.contains('block2'))){currentPosition+=1}
        draw()
    }

    // rotate the tetromino
    function rotate(){
        undraw()
        currentRetation ++
        if(currentRetation === current.length) {
            currentRetation = 0
        }
        current = theTetrominoes[random][currentRetation]
        draw()
    }


    // freeze th shape
    function freeze(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('block3') || squares[currentPosition + index + width].classList.contains('block2'))) {
            current.forEach(index => squares[index + currentPosition].classList.add('block2'))
            random = nextRandom
            nextRandom = Math.floor(Math.random()* theTetrominoes.length)
            current = theTetrominoes[random][currentRetation]
            currentPosition = 4
            draw()
            displayShape()
            addScore()
            gameOver()   
        }
    }
    freeze()


// game over
function gameOver(){
    if (current.some(index => squares[currentPosition + index].classList.contains('block2'))){
            scoreDisplay.innerHTML = 'End'
            clearInterval(timerId)
        }
}

 // show previous tetromino is displaysquares
 const displayWidth = 4
 const displayIndex = 0

 const smallTetrominoes = [
     [1, displayWidth+1, displayWidth*2+1, 2], // ltetromino
     [0, displayWidth, displayWidth+1, displayWidth*2+1], // ztetromino
     [1, displayWidth, displayWidth+1, displayWidth+2], //ttetromino
     [0, 1, displayWidth, displayWidth+1], //otetromino
     [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] // itetromino
 ]

 function displayShape(){
     displaySquares.forEach(square => {
         square.classList.remove('block')
     })
     smallTetrominoes[nextRandom].forEach(index => {
      displaySquares[displayIndex + index].classList.add('block')})
 }


// add score 

    function addScore(){
        for(currentIndex=0; currentIndex< 199; currentIndex+=width){
            const row = [currentIndex, currentIndex+1, currentIndex+2, currentIndex+3, currentIndex+4, currentIndex+5, currentIndex+6, currentIndex+7, currentIndex+8, currentIndex+9]

                if(row.every(index => squares[index].classList.contains('block2'))){
                    score +=10
                    lines++
                    scoreDisplay.innerHTML = score
                    linesDisplay.innerHTML = lines
                    row.forEach(index => {
                        squares[index].classList.remove('block2') || squares[index].classList.remove('block')
                    })
                    //splice array
                    const squaresRemoved = squares.splice(currentIndex, width)
                    squares = squaresRemoved.concat(squares)
                    squares.forEach(cell => grid.appendChild(cell))
                }
        }
    }
})