let you;
let gravity;
let me;

let rectarray = [];

let caught = false;
let currentRectangle;
let died = false;
let scoretime = 0

function setup() {
  frameRate(50);
  createCanvas(1270,680)
  rectMode(CENTER)


  you = new Ball(height/2,20)
  me = new Border
}

function draw() {
  background(0,0,0);

  if (frameCount % 30 == 0 && died == false) {
      let  r = new Rectangles(random(0,width), height-30, 500, -4);
      scoretime = scoretime+1
      rectarray.push(r);

    }

  for (let i = 0; i < rectarray.length; i++) {
  	 	rectarray[i].drawRect();
      rectarray[i].moveRect();
   }

   you.moveBall();
   you.getCaught();
   you.drawBall();
   me.drawBorder();
   you.die();

   displayscore();
}

function displayscore(){
  textSize(30)
  fill(255,255,255)
  text("score:"+ scoretime,25,50)
}

class Rectangles{

  constructor(x,y, width, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
      }

	drawRect(){
    		stroke(0);
    		fill("white");
		    rect(this.x,this.y,500,10);
        rect(this.x+600, this.y, 500,10)
        rect(this.x-600, this.y, 500,10)
        rect(this.x-1200, this.y, 500,10)
      }

  moveRect(){
    this.x;
    this.y = this.y-3.5;
  }
}


class Ball{

  constructor(x,y){
      this.x = x;
      this.y = y;
    }

  drawBall(){
      stroke(0);
      fill("yellow");
      ellipse(this.x,this.y,30,30);
    }

  moveBall(){
    print(caught);
     for (let i = 0; i < 10; i++) {

        if (keyIsDown(65)){
          this.x -= 1;
        }

        if (keyIsDown(68)){
          this.x += 1;
        }

        if (caught == false){
          this.y= this.y+.5;
        }

        if (this.x <= 5){
          died = true;
        }
        if (this.x >= 1270){
          died = true;
        }
        if (this.y <= 0){
          died = true;
        }
        if (this.y >= 680){
          died = true;}
      }
    }

    getCaught(){
        for (let i = 0; i < rectarray.length; i++) {
          if (this.x >= rectarray[i].x-250 && this.x <= rectarray[i].x+	250 && this.y >= rectarray[i].y-10 && this.y <=rectarray[i].y+20 && caught ==false){
            caught = true;
            currentRectangle = i;
            this.y = rectarray[currentRectangle].y-5;
            print("hit rectangle "+[i]+" at y value "+rectarray[i].y+" at "+frameCount);}
            else {
              caught = false;
            }}
        for (let i = 0; i < rectarray.length; i++) {
          if (this.x >= rectarray[i].x+350 && this.x <= rectarray[i].x+	850 && this.y >= rectarray[i].y-10 && this.y <=rectarray[i].y+20 && caught ==false){
            caught = true;
            currentRectangle = i;
            this.y = rectarray[currentRectangle].y-5;
            print("hit rectangle "+[i]+" at y value "+rectarray[i].y+" at "+frameCount);}
            else {
              caught = false;
            }}
        for (let i = 0; i < rectarray.length; i++) {
          if (this.x >= rectarray[i].x-850 && this.x <= rectarray[i].x-350&& this.y >= rectarray[i].y-10 && this.y <=rectarray[i].y+20 && caught ==false){
            caught = true;
            currentRectangle = i;
            this.y = rectarray[currentRectangle].y-5;
            print("hit rectangle "+[i]+" at y value "+rectarray[i].y+" at "+frameCount);}
            else {
              caught = false;
            }}
        for (let i = 0; i < rectarray.length; i++) {
          if (this.x >= rectarray[i].x-1450 && this.x <= rectarray[i].x-950 && this.y >= rectarray[i].y-10 && this.y <=rectarray[i].y+20 && caught ==false){
            caught = true;
            currentRectangle = i;
            this.y = rectarray[currentRectangle].y-5;
            print("hit rectangle "+[i]+" at y value "+rectarray[i].y+" at "+frameCount);}
            else {
              caught = false;
            }}
          }
        die(){
          if (died == true){
                  createCanvas(1300,800);
                  background(0,0,0);
                  textSize(100);
                  fill(255,0,0)
                  stroke(0,0,0)
                  text("YOU DIED",400,340);}
            }
}

class Border{

  drawBorder(){
    fill(255,255,255)
    rect(0,0,3000,10)
    rect(0,800,3000,10)
    rect(0,0,10,3000)
    rect(1500,0,10,2000)}
}
