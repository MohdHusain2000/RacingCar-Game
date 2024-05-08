////////////////////////////////
// Global Variables Here

const playerCar = document.getElementById('car')
let street = document.querySelector('.streets')
let opCar = document.getElementById('opCar')
let opCar1 = document.getElementById('opCar1')
let opCar2 = document.getElementById('opCar2')
let opCar3 = document.getElementById('opCar3')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let scoreButton = document.getElementById('score')

/*Game Control and Conditions*/
let gameOn = false
let score = 0
let opcarSpeed = 10;
let strSpeed = 5;

let controlKeys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
    Space: false,
} 

let playCar= {
    speed: 0,
    score: 0,
    acceleration: 1,
};

////////////////////////////////
// Functions For Game Logic Here

// Function to start the game
 const startPlay= () => {
    resetGame()
    gameOn = true
    playCar.score
    movePlayerCar()
    Result()
    gameLogic()
    
}

// Function to stop the game
 const stopPlay = () => {
    gameOn = false;
    resetGame()
}

// Function to count the Car.score
 const scoreResult = () => {
    scoreButton.innerText = 'score: ' + playCar.score
}

// Function to move the player car
 const movePlayerCar = () => {
    document.addEventListener('keydown', (event) => {
    controlKeys[event.keys = true]
        if (gameOn) {
            if (event.key === 'ArrowUp'){
                accelerations()
                moveUp () 
            } else if (event.key === 'ArrowDown'){
                moveDown ()
            } else if (event.key === 'ArrowRight') {
                moveRight ()
            } else if (event.key === 'ArrowLeft') {
                moveLeft()
            }
        }
    })
    document.addEventListener('keyup', (event) => {
        controlKeys[event.key] = false;
    });
}
 

// Function to speed up the car
const moveUp = () => {
    let topDir = parseFloat(window.getComputedStyle(playerCar).top);
    if (topDir+200 >= 0) {
        playerCar.style.top = (topDir - opcarSpeed) + 'px'
    } else {
        playerCar.style.top = 0 +'px'
    }
}
const accelerations = () =>  {
    playCar.speed += playCar.acceleration
    let Dir = parseFloat(playerCar.style.top)
    if (Dir > 0 || Dir !== null)
    playerCar.style.top = (Dir-playCar.speed) + 'px'
}

// Function to maintain the cars speed
const moveDown = () => {
    let topDir = parseFloat(window.getComputedStyle(playerCar).top)
    let maxHeight = 80 - playerCar.offsetHeight
    if (topDir < 0) {
        playerCar.style.top = (maxHeight+opcarSpeed) +'px'
    }
}

// Function to move the player car left
const moveLeft = () => {
    let leftDir = parseFloat(window.getComputedStyle(playerCar).left);
    if (leftDir > -200 ) {
        playerCar.style.left = (leftDir - opcarSpeed) + 'px'
    }
}

 // Function to move the player car right
const moveRight = () => {
    let leftDir = parseFloat(window.getComputedStyle(playerCar).left);
    let width = 130 - playerCar.offsetWidth;
    if (leftDir < width) {
        playerCar.style.left = (leftDir + opcarSpeed) + 'px'
    }
}

 // Function to get the highest score
 const Result = () => {
    let interval = setInterval(() => {
        if (gameOn) {
            playCar.score += 1
            scoreResult();
        } else if (gameOn == false){
            playCar.score=0
        }
        else {
            clearInterval(interval);
        }
    }, 50)
    
}

// Function to animate opponents cars
const animate1 = () => {
    opCar.classList.add('animateop')
    opCar1.classList.add('animateop1')
    opCar2.classList.add('animateop2')
    opCar3.style.display= 'none'
    street.classList.add('animatestr') 
}

// Function to animate opponents cars
const animate2 = () => {
    opCar.classList.add('animateop01')
    opCar1.classList.add('animateop02')
    opCar2.classList.add('animateop03')
    opCar3.style.display= 'none'
    street.classList.add('animatestr1')

    if (playCar.score >= 800 && playCar.score <1000){
        opCar.style.marginLeft='100vh';
        opCar1.style.marginLeft='80vh';
        opCar3.style.display= 'none'
    }
}

const animate3 = () => {
        opCar.classList.add('animateop001')
        opCar1.classList.add('animateop002')
        opCar2.classList.add('animateop003')
        opCar3.classList.add('animateop0004')
        street.classList.add('animatestr2')
        
        if (playCar.score >= 1000 && playCar.score<1250){
            opCar.style.marginLeft='83vh';
            opCar1.style.marginLeft='110vh';
            opCar3.style.display= 'none'
        }

        if (playCar.score >= 1250 && playCar.score<1500){
            opCar.style.marginLeft='80vh';
            opCar1.style.marginLeft='105vh';
}
}

const animate4 = () => {
    opCar.classList.add('animateop0001')
    opCar1.classList.add('animateop0002')
    opCar2.classList.add('animateop0003')
    opCar3.classList.add('animateop0004')
    street.classList.add('animatestr2')
    opCar3.style.display= 'block'
}

 // Function to move a car element

 const stopAnimate = () => {

    //* Less than 500
    opCar.classList.remove('animateop')
    opCar1.classList.remove('animateop1')
    opCar2.classList.remove('animateop2')
    street.classList.remove('animatestr')
 
    //* More than 500
    opCar.classList.remove('animateop01')
    opCar1.classList.remove('animateop02')
    opCar2.classList.remove('animateop03')
    street.classList.remove('animatestr1')
    
    //* More than 1000
    opCar.classList.remove('animateop001')
    opCar1.classList.remove('animateop002')
    opCar2.classList.remove('animateop003')
    street.classList.remove('animatestr1')

    //* More than 1200
    opCar.classList.remove('animateop0001')
    opCar1.classList.remove('animateop0002')
    opCar2.classList.remove('animateop0003')
    opCar3.classList.remove('animateop0004')
    street.classList.remove('animatestr2')
}

 // Function for collision
 const findCollision = () => {
    let playerRect = playerCar.getBoundingClientRect();
    let opCarRect = opCar.getBoundingClientRect();
    let opCarRect1 = opCar1.getBoundingClientRect();
    let opCarRect2 = opCar2.getBoundingClientRect();
    let opCarRect3 = opCar3.getBoundingClientRect();
    
 //* Detect collisions
    let topBoundary = playerRect.top + playerCar.offsetHeight * 0.1
    let bottomBoundary = playerRect.bottom - playerCar.offsetHeight * 0.1;

 if (topBoundary < opCarRect.bottom && bottomBoundary > opCarRect.top &&
    playerRect.left < opCarRect.right && playerRect.right > opCarRect.left) {
    gameOff()
 }  else if (topBoundary < opCarRect1.bottom && bottomBoundary > opCarRect1.top &&
    playerRect.left < opCarRect1.right && playerRect.right > opCarRect1.left){
    gameOff()
    }else if (topBoundary < opCarRect2.bottom && bottomBoundary > opCarRect2.top &&
    playerRect.left < opCarRect2.right && playerRect.right > opCarRect2.left){
    gameOff()
    }else if (topBoundary < opCarRect3.bottom && bottomBoundary > opCarRect3.top &&
    playerRect.left < opCarRect3.right && playerRect.right > opCarRect3.left){
    gameOff()
    }
 }
 
 // Function for game over
 const gameOff = () => {
    stopPlay()
    let message = document.querySelector('.content')
    message.innerText = 'Game over! your score is: ' + playCar.score
 }

 const gameLogic = () => {
    if (gameOn == true) {
        findCollision();
        gameLevel();
        requestAnimationFrame(gameLogic);
    }
    else {

    }
}

// function to increase game hardness
 const gameLevel = () => {
     if (gameOn == true) {
        if (playCar.score<=300 && playCar.score <=500){
           animate1()
        } else if (playCar.score >=800 && playCar.score <=1000){
           animate2()
        } else if (playCar.score >=1100 && playCar.score <=1300){
           animate3()
        } else if (playCar.score >=1500 && playCar.score <=1700){
           animate4()
     } 
    }
    }

// Function to reset the game
const resetGame = () => {
    gameOn =false;
    let message = document.querySelector('.content')
    message.innerText = ''
    Result()
    scoreResult();
    stopAnimate();
    playerCar.style.top = '0px';
    playerCar.style.left = '0px';
}

////////////////////////////////
// Rendering Function

start.addEventListener('click', startPlay)
stop.addEventListener('click', stopPlay)

