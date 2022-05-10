noseX=0;
noseY=0;
answer=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550 , 550 );
    canvas.position(560, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Intialized!");
}

function gotPoses(results)
{
 if(results.length > 0)
 {
   console.log(results);
   noseX = results[0].pose.nose.x;
   noseY = results[0].pose.nose.y;
   console.log("noseX = " + noseX + "noseY = " + noseY);

   leftWristX = results[0].pose.leftWrist.x;
   rightWristX = results[0].pose.rightWrist.x;

   answer = floor(elftWristX - rightWristX);
   console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "answer = " +answer);
 }
}

function draw(){
    background('#969A97');

    document.getElementById('square_side').innerHTML = "width and heigth the square will be = " + answer +"px";
    Fill('F90309');
    stroke('F90309');
    square(noseX, noseY, answer);
}