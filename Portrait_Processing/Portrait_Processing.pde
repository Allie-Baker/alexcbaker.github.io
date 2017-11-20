size(500, 500);

//rec(x, y, width, height);
fill(#FA7C7C);
ellipse(250, 250, 300, 300); //head
fill(#FFFFFF);
ellipse(205, 200, 50, 50); //eye
ellipse(295, 200, 50, 50);
fill(#3B2139);
ellipse(250, 310, 100, 10); //mouth
fill(#C1B0BF);
ellipse(250, 255, 30, 30); //nose
fill(#151111);
ellipse(200, 200, 20, 20); //pupil 1
fill(#151111);
ellipse(290, 200, 20, 20); //pupil 2
fill(#480E0E);
rect(115, 120, 50, 85); //hair
rect(160, 70, 40, 85); //hair
rect(195, 70, 50, 85); //hair
rect(240, 50, 50, 85); //hair
rect(290, 50, 50, 85); //hair
rect(329, 90, 50, 85); //hair
save("portrait.jpg");

//textSize(30);
PFont font = createFont("comic sans", 25);
textFont(font);
text("Processing is my passion", 20, 400);