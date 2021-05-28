//Globally declaring all of the variables

var player, player_img;
var test;
var playerpunch_img;
var homeScreen, homeScreen_img;
var newspaper, newspaper_img;
var locker, locker_img;
var shop, shop_img;
var challenges, challenges_img;
var button;
var input;

//Database Variables
var database;

function preload(){
    //loading all the images to their corresponding variables
    homeScreen_img = loadImage('Homescreen_assets/Aquatic Season Wallpaper.png');
    newspaper_img = loadImage('Homescreen_assets/Newspaper Icon.png');
    locker_img = loadImage('Homescreen_assets/Locker Icon.png');
    shop_img = loadImage('Homescreen_assets/Shop Icon.png');
    challenges_img = loadImage('Homescreen_assets/Challenges Icon.png');

    //This is the player skin
    player_img = loadImage('Skins/First Combo.png');
    playerpunch_img = loadImage('Skins with Weapons/Default with UMP.png');
    test = loadImage('Skins with Weapons/Default with Pump.png');
}

function setup(){

    //Homescreen Development:
    homeScreen = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    homeScreen.addImage(homeScreen_img);
    newspaper = createSprite(displayWidth/2 + 200, displayHeight/2 + 275, 50, 50);
    newspaper.addImage(newspaper_img);
    newspaper.scale = 0.7;
    locker = createSprite(displayWidth/2 + 600, displayHeight/2 + 275, 50, 50);
    locker.addImage(locker_img);
    locker.scale = 0.35;
    shop = createSprite(displayWidth/2 - 620, displayHeight/2 + 275, 50, 50);
    shop.addImage(shop_img);
    shop.scale = 0.75
    challenges = createSprite(displayWidth/2 - 190, displayHeight/2 + 270, 50, 50);
    challenges.addImage(challenges_img);
    challenges.scale = 0.6;

    player = createSprite(displayWidth/2,displayHeight/2,50,50);
    player.addImage(player_img);
    player.scale = 0.3;

    button = createButton("PLAY", displayWidth/2, displayHeight/2);
}
function draw(){
    createCanvas(displayWidth,displayHeight);
    
    database = firebase.database();

    text("Q: UMP, E: Pump, 1: Default", displayWidth/2, displayHeight/2);

    player.setCollider("circle", 0, 12, 60);

    drawSprites();
    playerControls();
    visibility();
    debugging();
}   

function playerControls(){

    //WASD Moving Controls

//button.keyWentDown(challenges.visible = false);
    //W
    if((keyIsDown(87) || keyIsDown(UP_ARROW))){
        player.y -= 10;
    }
    //S
    if ((keyIsDown(83) || keyIsDown(DOWN_ARROW))) {
        player.y += 10;
      }
    //A
      if ((keyIsDown(65) || keyIsDown(LEFT_ARROW))) {
        player.x -= 10;
      }
    //D
      if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW))) {
        player.x += 10;
      }

      player.collide(challenges);

      if(keyWentDown("Q")){
        player.addImage(playerpunch_img);
      }
      if(keyWentDown("E")){
        player.addImage(player_img);
      }

      if(keyWentDown("E")){
        player.addImage(test);
      }
      if(keyWentDown("1")){
        player.addImage(player_img)
      }

      if(mouseWentDown(challenges)){
        locker.visible = false;
      }

      console.log(mouseWentDown);
      
    //For the player to point to the mouse
    player.pointTo(100,100);
    player.pointTo(mouseX,mouseY);
}

function debugging(){
  player.debug = false;
  challenges.debug = true;
  challenges.setCollider("rectangle", 0, 0, 300, 350);

  newspaper.debug = false;
  newspaper.setCollider("rectangle", 0, 0, 400, 350)

  shop.debug = false;
  shop.setCollider("rectangle", 0, 0, 300, 250);
}

function visibility(){

    //Making the player invisible when the homescreen is up
    if(homeScreen.visible = true){
        player.visible = true;
    }

    //if(mouseWentDown(challenges)){
      //player.visible = true;
    //}

}
