

img = "";
Status ="";
function setup(){
    canvas = createCanvas(640, 300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting objects";
}

function preload(){
img = loadImage("TV.jpeg");
}

function modelLoaded(){
    console.log("Model loaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){

image(img, 0, 0, 640, 300);
fill("red");
text("cupboard", 150, 120);
noFill();
stroke("red");
rect(5, 100, 250, 300);

fill("red");
text("AC", 260, 100);
noFill();
stroke("red");
rect(250, 90, 200, 60);

fill("red");
text("clock",500, 130);
noFill();
stroke("red");
rect(450, 120, 150, 60);
}
