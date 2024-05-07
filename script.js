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
    acceleration: 0.1,
};

////////////////////////////////
// Functions For Game Logic Here
// Function to start the game
 const startPlay= () => {
    gameOn = true
    playCar.score
    scoreResult()
    movePlayerCar()
    animate()
    highScore()
     
}

// Function to stop the game
 const stopPlay = () => {
    gameOn = false;
}

// Function to count the Car.score
 const scoreResult = () => {
    scoreButton.innerText = 'score: ' + playCar.score
}

// Function to move the player car
 const movePlayerCar = () => {
    document.addEventListener('keydown', (event) => {
    controlKeys[event.keys == true]
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
 


