function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 349.99)
    canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}
function draw() {
    background('#84ff00')
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}