function setup() {

    video = createCapture(VIDEO);

    video.size(550,500);

    video.position(150,150);

    canvas = createCanvas(550,550);

    canvas.position(800,150);

    poseNet = ml5.poseNet(video,modelloaded);

    poseNet.on("pose", gotPoses);
    
}

function modelloaded() {

    console.log("PoseNet Is Loaded");
    
}

function gotPoses() {
    
}