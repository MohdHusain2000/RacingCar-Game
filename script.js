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
let controlKeys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
} 
let playCar= {
    speed: 0,
    score: 0,
    acceleration: 1,
};

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











