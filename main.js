function preload(){
    
}

function setup(){
  canvas = createCanvas(400,300);
  canvas.position(750,400);
  video = createCapture(VIDEO)
  video.hide();
}

function draw(){
    circle(100, 100, 100);
    ellipse(300, 120, 120, 50)
    rect(300, 200, 55, 100);
    image(video,0,150,200,150);
}



