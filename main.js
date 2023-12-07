function preload(){

}

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video.position(0,150);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", Gotposes);
}

function draw(){
    background("grey");

}

function modelLoaded(){
    console.log("Model Loaded");
}

function Gotposes(results){
if(results.length>0){
    console.log(results);
}
}