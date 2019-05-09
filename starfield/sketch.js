var stars = [];
var farStars = [];
var accel = 1.2;
var res = 5;
function setup() {
    createCanvas(1920 * 2 / 3, 1080 * 2 / 3);
    frameRate(75);
}

function draw() {
    translate(width / 2, height / 2);
    background(0,50);
    var x = random(-width / 2, width / 2);
    var y = random(-height / 2, height / 2);
    var v = random(5);
    farStars.unshift(new FarStar(x, y, random(3)));
    if (frameCount > 360){
      farStars.pop();
    }
    for (var i = 0; i < res; i++) {
        var xstart = random(-width / 1000, width / 1000);
        var ystart = random(-width / 1000, width / 1000);
        stars.push(new Star(xstart, ystart));
    }
    for (var i = 0; i < farStars.length; i++){
      stroke(255);
      farStars[i].move();
      strokeWeight(farStars[i].v);
      point(farStars[i].x, farStars[i].y);
    }
    for (var i = 0; i < stars.length; i++) {
        strokeWeight(stars[i].weight);
        stroke(stars[i].r, stars[i].g, stars[i].b, stars[i].a);
        fill(stars[i].r, stars[i].g, stars[i].b, stars[i].a);
        //ellipse(stars[i].headX, stars[i].headY, 3 * stars[i].weight, 3 * stars[i].weight);
        stars[i].move();
        stars[i].remove();
        stars[i].bolden();
        //stars[i].bounce();
        line(stars[i].headX, stars[i].headY, stars[i].tailX, stars[i].tailY);
    }
}

function keyTyped() {
    if (key == 'm')
        res++;
    if (key == 'l' && res > 1)
        res--;
    if (key == 'r') {
        for (var i = 0; i < stars.length; i++) {
            stars[i].xspeed *= -1;
            stars[i].yspeed *= -1;
        }
        for (var i = 0; i < farStars.length; i++){
          farStars[i].x *= 1.01;
          farStars[i].y *= 1.01;
        }
    }
}
