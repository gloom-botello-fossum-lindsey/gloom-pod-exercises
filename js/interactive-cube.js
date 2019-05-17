// let img;
// let theta = 0;
//
//
// function setup() {
//     createCanvas(1000, 500, WEBGL);
//
//     img = loadImage('img/yes.jpg');
//
// }
//
// function draw() {
//     background(250);
//
//     translate(0, 0, 0);
//     push();
//     rotateZ(frameCount * 0.01);
//     rotateX(frameCount * 0.01);
//     rotateY(frameCount * 0.01);
//     texture(img);
//     box(200, 200, 200);
//     pop();
//     theta += 0.05;
//
//     box.position.x = mouseX;
//     box.position.y = mouseY;
// }
//
//
let u;
let l;
let a;
let mods = [];
let x;
let y;
let count;

function setup() {
    createCanvas(windowWidth, windowHeight);
    u = 100;
    l = 20;
    let highCount = height/80;
    let wideCount = width/80;
    count = int(highCount * wideCount);

    let index = 0;
    for (let xc = 0; xc < wideCount; xc++) {
        for (let yc = 0; yc < highCount; yc++) {
            mods[index++] = new Module(int(xc)*u,int(yc)*u);
        }
    }
}

function draw() {



    if (mouseIsPressed) {
        background(0);
        stroke(255,163,163);
    } else {
        background(255,163,163);
        stroke(255);
    }

    strokeWeight(15);

    translate(20, 20);

    for (let i = 0; i <= count; i++) {
        mods[i].update();
        mods[i].draw2();
    }

}

function Module(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.a = 0;


}

Module.prototype.update = function() {
    if (mouseIsPressed) {
        this.a = -20 * (atan2(mouseY-this.y, mouseX-this.x));
    } else {
        this.a = atan2(mouseY-this.y, mouseX-this.x);
    }
}

Module.prototype.draw2 = function() {
    push();
    translate(this.x, this.y);
    rotate(this.a);
    line(-l,0,l,0);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}