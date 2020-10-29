var hypnoticBall, database;
var position;
var form, player, game;
var playerCount = 0;
var gameState = 0;
var allPlayers, car1, car2, car3, car4, cars;


function setup(){
  database = firebase.database();
  createCanvas(displayWidth-30, displayHeight-100);
  
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  
  if (playerCount === 4){
    game.update(1);
  }

  if (gameState === 1){
    clear();
    game.play();
  }
}
