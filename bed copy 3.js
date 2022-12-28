


img = "";
Status ="";
function setup(){
    canvas = createCanvas(640, 300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting objects";
}

function preload(){
img = loadImage("desk1.jpeg");
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
    text("laptop", 150, 75);
    noFill();
    stroke("red");
    rect(120, 60, 400, 300);
}
