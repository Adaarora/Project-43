

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); .3
}

function draw() {
  background(0, 0, 0);
  hr = hour();
  mn = minute();
  sc = second();

  translate(200, 200);
  rotate(-90);



  console.log(' hr ' + hr + ' mn ' + mn + ' sc ' + sc);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  //drawing seconds hand
  push();


  //rotate the hand based on angle calculated 
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  //Seconds
  stroke(255, 0, 0);
  arc(0, 0, 300, 300, 0, scAngle);

  //drawing minute hands
  push();

  //rotate the hand based on angle calculated
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
 
  //drawing hour hands
  push();

  //rotate the hand based on angle calculated
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}