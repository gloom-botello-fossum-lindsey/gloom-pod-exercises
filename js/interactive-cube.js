let img;
let theta = 0;

let x = 100,
    y = 100,
    angle1 = 0.0,
    segLength = 50;


function setup() {
    createCanvas(1000, 500, WEBGL);

    img = loadImage('img/yes.jpg');
}

function draw() {
    background(250);

    translate(0, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(img);
    box(200, 200, 200);
    pop();
    theta += 0.05;

    dx = mouseX - x;
    dy = mouseY - y;
    angle1 = atan2(dy, dx);
    x = mouseX - cos(angle1) * segLength;
    y = mouseY - sin(angle1) * segLength;

    segment(x, y, angle1);
    ellipse(x, y, 20, 20);

}

function segment(x, y, a) {
    push();
    translate(x, y);
    rotate(a);
    line(0, 0, segLength, 0);
    pop();
}