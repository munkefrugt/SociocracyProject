class PCircle {

  
  constructor(circleId) {



    print("constructor");
    this.aim = "default"; 
    this.domain = "default"; 
    this.x = mouseX+500;//random(width);
    this.y = mouseY;//random(height);

    this.Vcenter = createVector(this.x, this.y);
    
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
    this.peopleInCircle = [];
    this.rolesInCircle = [];

  }

  display() {
    //let c = color(255, 204, 0);
    
    
    
    fill(this.c);
    stroke(0);
    strokeWeight(2);
    // display circle
    ellipse(this.x, this.y, this.radius*2);
    fill(0); 
    noStroke();
    textSize(16);
    // puts text in center.
    textAlign(CENTER); 
    text("circle name= "+ this.name, this.x, this.y);

    text("id= "+this.circleId, this.x, this.y+20);
    // cant call the parrentCircle.name from this class.. ?? but it works from main
      //text("parrent: " +this.parrentCircle.name, this.x, this.y+40); 
    
    
    
    // children of circle info. 
    for (let i = 0; i < this.childrenOfThisCircle.length; i++){
      text("child name: "+ this.childrenOfThisCircle[i].name, this.x, this.y+ 60 + (i* 20)); 
    }

    
    // display people in circle
    let angle = 0;

    let angleDifference =  360 / this.peopleInCircle.length; 
    for (let i = 0; i < this.peopleInCircle.length; i++){
      text("person name: "+ this.peopleInCircle[i].name, this.x, this.y+ 100 + (i* 20)); 
      // display circle
      //print("angle diff " + angleDifference);

      //print("angle " + angle);
      //let angle = 180; 
      // make circle coordinates on the perameter. 
       
      // center of big circle
      let x0 = this.x;
      let y0 = this.y;
      // get coordinates

      let x1 = x0 + this.radius * cos(angle);
      
      let y1 = y0 + this.radius * sin(angle);
      
      //peopleInCircle[i]

      fill(255);
      stroke(0);
      strokeWeight(2);
      ellipse(x1,y1,20); 
      print("peopleInCircle");
      print(peopleInCircle[i]);
      //this.peopleInCircle[i]. 
      angle = angle + angleDifference;  

    }
    
    // display roles: 
    /*
    let angle = 0;
    let angleDifference =  360 / this.rolesInCircle.length; 
    for (let i = 0; i < this.rolesInCircle.length; i++){
      text("role name: "+ this.rolesInCircle[i].name, this.x, this.y+ 100 + (i* 20)); 
      // display circle
      //print("angle diff " + angleDifference);

      //print("angle " + angle);
      //let angle = 180; 
      // make circle coordinates on the perameter. 
       
      // center of big circle
      let x0 = this.x;
      let y0 = this.y;
      // get coordinates

      let x1 = x0 + this.radius * cos(angle);
      let y1 = y0 + this.radius * sin(angle);
      print(rolesInCircle);
      //rolesInCircle[i].setX(x1); 
      //rolesInCircle[i].setY(y1); 

      fill(255);
      stroke(0);
      strokeWeight(2);
      ellipse(x1,y1,20); 

      //this.peopleInCircle[i]. 
      angle = angle + angleDifference;  

    }
    */



  }
  // is mouse inside? 
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
    //print(this.childrenOfThisCircle); 
  }
  
  

  
}
