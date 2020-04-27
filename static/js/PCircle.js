class PCircle {

  
  constructor(circleId) {

    this.circlesArrayNum = circleId;
    this.aim = "default"; 
    this.domain = "default"; 
    this.x = mouseX+500;
    this.y = mouseY;

    this.Vcenter = createVector(this.x, this.y);
    
    this.radius = 50;
    this.c = color(255, 255, 255);
    
    this.childrenOfThisCircle = [];    
    this.circleId = circleId; 
    
    this.parrentCircle;  
    
    
    this.name = circleId;  
    this.peopleInCircle = [];
    this.rolesInCircle = [];

  }

  display() {
    fill(this.c);
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y, this.radius*2);
    fill(0); 
    noStroke();
    textSize(16);
    textAlign(CENTER); 
    text( this.name, this.x, this.y);
    
  }

  isMouseInCircle(px,py){
    let d = dist(px,py,this.x,this.y);
    if(d < this.radius){
      return true; 
    }
    else{
      return false;
    }
  }

  setColor() {
    //  blue(0, 0, 255)
    //  green(0, 255, 0)
    //  red (255, 0, 0);

    this.c = color(255, 104, 0);
  }

  makeChild(childCircle){
    this.childrenOfThisCircle.push(childCircle); 
  }
  
  

  
}
