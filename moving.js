int count = 15;
float spring = 0.05;
float gravity = 0.03;
float friction = -0.9;
float[] posX = new float[count];
float[] posY = new float[count];
float[] speedX = new float[count];
float[] speedY = new float[count];
float[] sizeW = new float[count];
float[] sizeH = new float[count];
color[] colors = new color[count];

void setup() {
  size(600, 600);
  for (int i=0; i < posX.length; i++) {
    posX[i] = width/2;
    posY[i] = height/2;
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
    sizeW[i] = random(20, 25);
    sizeH[i] = random(20, 100);
    colors[i] = color(random(245), random(255), random(265));
  }
}
void draw() {
  background(130, 75, 200);
  fill(255);
  rect(40, 40, width-80, height-80);
  for (int i = 0; i < posX.length; i++) {
    //update all positions
    //posX[i] += speedX[i];
    //posY[i] += speedY[i];
    move(i);


    //draw all balls
    fill(colors[i]);
    ellipse(posX[i], posY[i], sizeW[i], sizeW[i]);
    //check boundaries for all balls

    /*  if (posX[i] < 40+sizeW[i]/2 || posX[i] > (width-40)-sizeW[i]/2 ) {
     speedX[i] = -speedX[i];
     colors[i]= color(random(255),random(255),random(256));
     }
     if (posY[i] < 40+sizeW[i]/2 || posY[i] > (height-40)-sizeW[i]/2) {
     speedY[i] = -speedY[i];
     colors[i]= color(random(255),random(255),random(256));
     }

     */
  }


}

void mouseClicked() {

  for (int i = 0; i < posX.length; i++) {
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
  }
}

int bound = 85;

void move(int i) {
  speedY[i] += gravity;
  posX[i] += speedX[i];
  posY[i] += speedY[i];

  if (posX[i] + sizeW[i]/2 > width-40) {
    posX[i] = width-40 - sizeW[i]/2;
    speedX[i] *= friction;
    colors[i]= color(abs(speedX[i])*random(bound), abs(speedX[i])*random(bound), abs(speedX[i])*random(bound));
  } else if (posX[i] - sizeW[i]/2 < 40) {
    posX[i] = sizeW[i]/2 + 40;
    speedX[i] *= friction;

    colors[i]= color(abs(speedX[i])*random(bound), abs(speedX[i])*random(bound), abs(speedX[i])*random(bound));
  }
  if (posY[i] + sizeW[i]/2 > height-40) {
    posY[i] = height-40 - sizeW[i]/2;
    speedY[i] *= friction;
    colors[i]= color(abs(speedY[i])*random(bound), abs(speedY[i])*random(bound), abs(speedY[i])*random(bound));
  } else if (posY[i] - sizeW[i]/2 < 40) {
    posY[i] = sizeW[i]/2 + 40;
    speedY[i] *= friction;
    colors[i]= color(abs(speedY[i])*random(bound), abs(speedY[i])*random(bound), abs(speedY[i])*random(bound));
  }
}
