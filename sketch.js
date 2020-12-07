var car, carImage;
var speed, weight;

function preload(){
carImage = loadImage("unnamed.png");
bkg = loadImage("city.jpg")
by = loadImage("by.png")

}

function setup() {
  createCanvas(1600,400);

  bg = createSprite(800, 200, 1600, 400)
bg.addImage(bkg)



  speed = random(55,90);
  weight = random(400, 1500);

car = createSprite(50, 200, 50, 50);
car.addImage(by)
car.scale = 0.07
car.velocityX = speed;


wall = createSprite(1500, 200, 60, height/2);
wall.shapeColor = "black";

damage = 0.5 * weight * speed * speed / wall.width *  wall.width * wall.width

}

function draw() {
  background("lightCyan");

if (car.collide(wall)) {

 if (damage < 100 ){
   wall.shapeColor = "lime"
   fill("lime");
   textSize(200);
   text("best !!",500, 250);
 }

 if (damage > 100 && damage < 180){
   wall.shapeColor = "yellow"
   fill("yellow");
   textSize(200);
   text("average",500, 250);
 }

 if (damage > 180){
   wall.shapeColor = "red"
   fill("red");
   textSize(200);
   text("! worst !",500, 250);
 }
} 

  drawSprites();
  if(wall.shapeColor === "lime")
  { fill("lime"); 
  textSize(200); 
  text("best !!",500, 250); } 

  if(wall.shapeColor === "yellow")
  { fill("yellow"); 
  textSize(200); 
  text("average",500, 250); } 

  if(wall.shapeColor === "red")
  { fill("red"); 
  textSize(200); 
  text("! worst !",500, 250); } 
}