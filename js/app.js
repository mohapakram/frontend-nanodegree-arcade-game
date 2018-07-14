'use strict';
// Enemies our player must avoid
var Enemy = function(x , y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.speed = speed;
    this.y = y;
    this.x = x;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if(this.x >= 505){
      this.x = 0;
    }

  this.checkCollision();
  };

    Enemy.prototype.checkCollision = function() {
      // check for collision between enemy and player
      if (
          player.y + 131 >= this.y + 90
          && player.x + 25 <= this.x + 88
          && player.y + 73 <= this.y + 135
          && player.x + 76 >= this.x + 11) {
          console.log('collided');
          player.x = 202.5;
          player.y = 383;
      }
    };


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

let Player;


Player = function (x , y, speed){
  this.y = y;
  this.x = x;
  this.speed = speed;
  this.sprite = 'images/char-boy.png';
}

Player.prototype.render = function (){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.update = function (){
  // pass score as an argument to the increaseDifficulty function
  if (this.y + 63 <= 0) {
      this.x = 202.5;
      this.y = 383;
      console.log('you made it!');
  }

  // check if this runs into left, bottom, or right canvas walls
  // prevent this from moving beyond canvas wall boundaries
  if (this.y > 383 ) {
      this.y = 383;
  }
  if (this.x > 402.5) {
      this.x = 402.5;
  }
  if (this.x < 2.5) {
      this.x = 2.5;
  }
};

Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left') {
        this.x -= this.speed;
    }
    if (keyPress == 'up') {
        this.y -= this.speed - 20;
    }
    if (keyPress == 'right') {
        this.x += this.speed;
    }
    if (keyPress == 'down') {
        this.y += this.speed - 20;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let player = new Player(202.5, 383, 50);
let enemy1 = new Enemy(0, Math.random() * 184 + 30, Math.random() * 256);
let enemy2 = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
let enemy3 = new Enemy(0, Math.random() * 184 + 80, Math.random() * 256);

allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
