
function FarStar(x,y,v){
  this.x = x;
  this.y = y;
  this.v = v;
  this.move = function(){
    this.x *= 1.001;
    this.y *= 1.001;
  }
}
