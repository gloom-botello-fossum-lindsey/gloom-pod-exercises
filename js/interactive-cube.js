let img;
let theta = 0;


function setup() {
    createCanvas(1000, 500, WEBGL);

    img = loadImage('img/yes.jpg');
}

function draw() {
    background(250);

    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(img);
    box(100, 100, 100);
    pop();
    theta += 0.05;

}