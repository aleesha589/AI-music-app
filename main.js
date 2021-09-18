song = "";
leftWristscore = 0;
rightWristscore = 0;

function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  webcam = createCapture(VIDEO);
  webcam.size(600, 500)
  webcam.hide();

  poseNet = ml5.poseNet(webcam, modelloaded);
  poseNet.on('pose', getresult);
}

function modelloaded() {
  console.log("Model loaded successfully");
}

function getresult(results) {
  console.log(results);
  leftWristscore = results[0].pose.keypoints[9].score;
  rightWristscore = results[0].pose.keypoints[10].score;
  
}

function draw() {
  image(webcam, 0, 0, 600, 500);
  fill(255, 0, 0);
  stroke(0, 0, 255);
  if (leftWristscore > 0.2) {
    song1.play();
  }
  if(rightWristscore>0.2){
    song2.play()
    
  }
}

function preload() {
  song1 = loadSound("Imagine_Dragons_Thunder.mp3");
  song2= loadSound("peter.mp3")
}

function play() {
  song1.play();
  song1.setVolume(1);
  song1.rate(1);
}