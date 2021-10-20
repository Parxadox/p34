//Create variables here
var dog,happyDog
var database
var foodS
var foodStock


function preload()
{
	//load images here
 dog=loadImage("images/Dog.png");
 happyDog=loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500,500);
  doggy=createSprite(50,50);
  doggy.addImage("dog");
  database=firebase.database();
  foodStock=database.ref('Food');
   foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87)
if (keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if (x<=0) {
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

