





img = "";
Status ="";
function setup(){
    canvas = createCanvas(640, 300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting objects";
}

function preload(){
img = loadImage("fruit.jpeg");
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
    text("Basket", 45, 47);
    noFill();
    stroke("red");
    rect(3, 6, 610, 500);
    
    fill("red");
    text("Apple", 250, 90);
    noFill();
    stroke("red");
    rect(230, 9, 200, 250);}
