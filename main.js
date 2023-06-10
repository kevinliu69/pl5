function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 50, 50, 520, 380);
    fill("cyan");
    stroke("cyan");
    rect(5, 5, 625, 30);
    rect(5, 440, 625, 30);
    rect(5, 5, 30, 440);
    rect(600, 5, 30,440);
    
}

function take_snapshot(){
    save('student_name.png');
}

