var database;
var backgroundImg;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var appleImg,bananaImg,melonImg,orangeImg, pineappleImg;
var basketImg;
var player1score =0;
var player2score =0;

function preload(){
  backgroundImg = loadImage("images/jungle.jpg");
  basketImg = loadImage("images/basket2.png");
  appleImg = loadImage("images/apple2.png");
  bananaImg = loadImage("images/banana2.png");
  melonImg = loadImage("images/melon2.png");
  orangeImg = loadImage("images/orange2.png");
  pineappleImg = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImg);

  // Add conditions for gameStates and playerCount
   if (playerCount===2) {
    game.update(1);
  }
  if (gameState===1) {
    clear();
    game.play();
  }
  if (gameState===2) {
    game.end();
  }
 
}