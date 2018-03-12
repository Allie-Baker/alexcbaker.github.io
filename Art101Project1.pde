//void setup() {
for (int i = 5; i < 95; i += 5) {
  if (i < 35) {
    line( 30, i*4, 80, i );
  } else {
    line( 20, i, 90, i );
  }
}


//int speed = 2;
//float red = 55;
//float green = 95;
//float blue = 200;
//float x = -100;
//float y = -100;
//float px;
//float py;
//float easing = 0.15;
//float size = 32;
//int numCircles = 1;



size(400, 400);
background(0, 25, 0);
noStroke();
for (int i = 90; i < 200; i=i+5) {
  fill(255, 45, i, i*2);
  rect(i, i, 20, 30, 5);
  fill(235, 50, 20, i);
  rect(i*5, 22, 12, 6);
  line(255, i*5, 150, i);
  fill(i*3, 300, 27, i);
  ellipse(i, i*3, 44, 200);
  ellipse(i*2, 20, 30, i);
  triangle(20, i, 40, i, 30, 20);
  noStroke();
  quad(i, 50, 50, 86, 120, 69, 60, 30);
}
saveFrame("frames/project1.png");