let img;
let theta = 0;


function setup() {
    createCanvas(1000, 500, WEBGL);

    img = loadImage('img/yes.jpg');

    angleMode(DEGREES);
    cam = createCamera();

}

function draw() {
    background(250);

    translate(0, 0, 0);
    push();
    // rotateZ(frameCount * 0.01);
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    texture(img);
    box(200, 200, 200);

    rotateX(-cam.eyeY);
    rotateY(cam.eyeX);
    translate(0, 0, -height/2);
    plane(width, height);

    pop();
    theta += 0.05;

    orbitControl();
    cam.eyeZ = cam.defaultEyeZ;

    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, -1);
    noStroke();
    sphere(40);


}
