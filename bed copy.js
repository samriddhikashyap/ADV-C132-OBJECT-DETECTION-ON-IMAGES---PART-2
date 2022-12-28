


img = "";
Status ="";
function setup(){
    canvas = createCanvas(640, 300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting objects";
}

function preload(){
img = loadImage("bottle.jpeg");
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
text("bottle", 120, 47);
noFill();
stroke("red");
rect(100, 6,220, 230);

fill("red");
text("bottle",390, 47);
noFill();
stroke("red");
rect(350, 6,220, 230);
}
