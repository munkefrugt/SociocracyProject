
// Jitter class
class Jitter {
    constructor() {
      print("constructor");
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(10, 40);
      this.speed = 10;
    }
  
    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
  
    display() {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }
  