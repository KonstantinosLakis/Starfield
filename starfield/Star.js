function Star(xspeed, yspeed) {
    var scl = random(50,100);
    this.weight = 0.5;
    this.headX = scl * xspeed;
    this.headY = scl * yspeed;
    this.tailX = scl * xspeed;
    this.tailY = scl * yspeed;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200,255);
    this.move = function () {
        this.headX += this.xspeed;
        this.headY += this.yspeed;
        this.tailX += this.xspeed * 0.4;
        this.tailY += this.yspeed * 0.4;
        this.xspeed *= accel;
        this.yspeed *= accel;
    }
    this.remove = function () {
        if (Math.abs(this.tailX) > width  ||
            Math.abs(this.tailY) > height ) {
            stars.splice(stars.indexOf(this), 1);
        }
    }
    this.bolden = function () {
        this.weight = Math.min(this.weight + this.xspeed / 1000 + this.yspeed / 1000,2);
    }
    /*  this.bounce = function(){
   if(Math.abs(this.tailX) > width / 2){
       this.xspeed *= -1;
   }
   if(Math.abs(this.tailY) > height / 2){
       this.yspeed *= -1;
   }
      }
}
*/
}