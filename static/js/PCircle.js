class PCircle {

  
  constructor(circleId) {
    print("constructor");
    this.x = random(width);
    this.y = random(height);
    //this.diameter = random(100, 200);
    //this.radius = diameter/2;
    this.radius = 50;
    //this.color = color(0, 0, 0);
    this.c = color(255, 255, 255);
    
    // this is making an empty array for children.
    // yes it works
    this.childrenOfThisCircle = [];    
    this.circleId = circleId; 
    
    this.parrentCircle;  
    
    // default referes mother circle to it self. somehow. 
    
    this.name = circleId;  // default the name is the number
  }

  display() {
    //let c = color(255, 204, 0);
    
    

    fill(this.c);
    ellipse(this.x, this.y, this.radius*2);
    fill(0); 
    textSize(16);
    // puts text in center.
    textAlign(CENTER); 
    text("circle name= "+ this.name, this.x, this.y);

    text("id= "+this.circleId, this.x, this.y+20);

    if(this.parrentCircle != null){
      text("parrent: " +this.parrentCircle.name, this.x, this.y+40); 
    }
    
    for (let i = 0; i < this.childrenOfThisCircle.length; i++){
      text("child: "+ this.childrenOfThisCircle[i].name, this.x, this.y+ 60 + (i* 20)); 
    }


    //circle(this.x, this.y, this.radius);

    // if circle is a focuscircle then show buttons
    /*if(this.isFocusCircle == true){
      
    ellipse(this.x + this.radius, this.y + this.radius,50);
 
    }
    */

  }

  setColor() {
    //  blue(0, 0, 255)
    //  green(0, 255, 0)
    //  red (255, 0, 0);

    this.c = color(255, 104, 0);
  }

  makeChild(childCircle){
    this.childrenOfThisCircle.push(childCircle); 
    print(this.childrenOfThisCircle); 
  }
  
  giveChildrenNewParrent(newParrent){
    for (let i = 0; i < this.childrenOfThisCircle.length; i++){
    this.childrenOfThisCircle[i].parrentCircle = newParrent; 
    }

  }

  getChildrenOfThisCircle() {
    return getChildrenOfThisCircle; 
  }

  
}
