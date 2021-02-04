var t, bgImg, tImg;
var lay;

function preload(){
  bgImg = loadImage("bg.jpg");
  tImg = loadImage("pixil-frame-0.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight); 
  t = createSprite(50, 50, 50, 50);
  t.addImage(tImg)

  lay = new Layout();

}


function draw() {
background(0);
image(bgImg, 0, 0, 5000, 4500)

if(keyDown("up")){
  t.y=t.y-10;
}
if(keyDown("down")){
  t.y=t.y+10;
}
if(keyDown("left")){
  t.x=t.x-10;
}
if(keyDown("right")){
  t.x=t.x+10;
}

console.log("X "+mouseX);
console.log("Y "+mouseY);

  
  camera.y = t.y;


  if(t.x>=50 && t.x<=4650){
    camera.x = t.x;
  }
  else if(t.x<50){
    camera.x = 50;
  }
  else if(t.x>4650){
    camera.x = 4650;
  }

  if(t.y>=50 && t.y<=4150){
    camera.y = t.y;
  }
  else if(t.y<50){
    camera.y = 50;
  }
  else if(t.y>4150){
    camera.y = 4150;
  }

  


drawSprites();
  
}


