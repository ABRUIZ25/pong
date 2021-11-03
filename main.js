// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

//ball stuff
const GameBall = document.querySelector('.ball')
let GameBallYPosition = 0
let GameBallYVelocity = 2
let GameBallXPosition = 0
let GameBallXVelocity = 2


// Size of the ball (in px)
const BALL_SIZE = 20;

//starting position of the ball 
 GameBall.style.top = "250px"
 GameBall.style.left = '350px'
// Update the pong world

//helper fuction for after reset
function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}
function update() {
    // update ball movement y 
    GameBallYPosition = GameBallYPosition + GameBallYVelocity
    GameBall.style.top = GameBallYPosition + 'px'

    //update ball movement x
    GameBallXPosition = GameBallXPosition + GameBallXVelocity
    GameBall.style.left = GameBallXPosition + 'px'

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = computerPaddleYPosition + 'px';
    //ball what if
    // if it hits the bottom
    if (GameBallYPosition >= 465){
        GameBallYVelocity = GameBallYVelocity - .1
        GameBallXVelocity = GameBallXVelocity + .1

    }
  if (GameBallXPosition >= 670 ){
    GameBallYVelocity = GameBallYVelocity + .2
    GameBallXVelocity = GameBallXVelocity - 2
  }
  if (GameBallXPosition <= 0){
    GameBallXPosition = 5
    GameBallYPosition = 2
  }
}


// Call the update() function every 35ms
setInterval(update, 35);
document.addEventListener('click',function(){
    GameBallYPosition = getRandomNumber(500)

 if (GameBall.style.top === '1.2px' &&
     GameBall.style.left === '-1px'){

        if (GameBallYPosition >= 465){
            GameBallYVelocity = GameBallYVelocity - .1
            GameBallXVelocity = GameBallXVelocity + .1
    
        }
      if (GameBallXPosition >= 670 ){
        GameBallYVelocity = GameBallYVelocity + .2
        GameBallXVelocity = GameBallXVelocity - 2
      }
      if (GameBallXPosition <= 0){
        GameBallXPosition = 5
        GameBallYPosition = 2
      }
    }
     }
  )

