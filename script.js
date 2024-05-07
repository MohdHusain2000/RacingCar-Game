////////////////////////////////
// Global Variables Here
const playerCar = document.getElementById('car')
let street = document.querySelector('.streets')
let opCar = document.getElementById('opCar')
let opCar1 = document.getElementById('opCar1')
let opCar2 = document.getElementById('opCar2')
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
    gameOn = true
    playCar.score
    scoreResult()
    movePlayerCar()
    highScore()
    gameLogic()
}

// Function to stop the game
 const stopPlay = () => {
    gameOn = false;
    stopAnimate()
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
                Acceleration()
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
const Acceleration = () =>  {
    playCar.speed += playCar.acceleration
    let Dir = parseFloat(playerCar.style.top)
    if (Dir > 0 || Dir !== null)
    playerCar.style.top = (Dir-playCar.speed) + 'px'
}

// Function to maintain the cars speed
const moveDown = () => {
    let topDir = parseFloat(window.getComputedStyle(playerCar).top)
    let maxHeight = 90 - playerCar.offsetHeight
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
    let width = 150 - playerCar.offsetWidth;
    if (leftDir < width) {
        playerCar.style.left = (leftDir + opcarSpeed) + 'px'
    }
}

 // Function to get the highest score
 const highScore = () => {
    let interval = setInterval(() => {
        if (gameOn) {
            playCar.score += 5
            scoreResult();
        } else {
            clearInterval(interval);
        }
    }, 30)
}

// Function to animate opponents cars
const animate = () => {
    opCar.classList.add('animateop')
    opCar1.classList.add('animateop1')
    opCar2.classList.add('animateop2')
    street.classList.add('animatestr') 
}

// Function to animate opponents cars
const animate1 = () => {
    opCar.classList.add('animateop01')
    opCar1.classList.add('animateop02')
    opCar2.classList.add('animateop03')
    street.classList.add('animatestr1') 
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
    
}
