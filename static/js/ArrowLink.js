class ArrowLink {

    constructor(roleForArrowHead,roleForArrowTail) {
        
        print("new arrowLink");

        this.color = 'red'; 
        this.roleForArrowHead = roleForArrowHead;
        this.roleForArrowTail = roleForArrowTail; 
        // base is temporarily the new center (0,0) in the coordinate system.
        this.base = createVector(roleForArrowTail.x, roleForArrowTail.y); 
        // vec" is projected to base position.
        // calculation:  
        //b= c-a , base = a , head = c , vec = b, or vec = head - base

        this.head = createVector(roleForArrowHead.x, roleForArrowHead.y);
        this.vectorOnBase = this.head.sub(this.base);
        
        this.arrowArrayNum; 
        print("new arrow");
    }
    updatePosition(){
        this.base.x = this.roleForArrowTail.x;
        this.base.y = this.roleForArrowTail.y;
        this.head.x = this.roleForArrowHead.x;
        this.head.y = this.roleForArrowHead.y;
        

        this.vectorOnBase = this.head.sub(this.base);
    
    }
    displayArrow() {       

       push();
       stroke(this.color);
       strokeWeight(3);
       fill(this.color);
       translate(this.base.x, this.base.y);
       line(0, 0, this.vectorOnBase.x, this.vectorOnBase.y);
       rotate(this.vectorOnBase.heading());
       let arrowSize = 20;
        // make the arrow apear just outside of the role circle. 
       let distanceFromRadius = this.roleForArrowHead.radius+2; 
       translate(this.vectorOnBase.mag() - arrowSize - distanceFromRadius, 0);
       triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
       //noFill();
       strokeWeight(1);
       textAlign(LEFT);
       textSize(30); 
       //text(this.arrowArrayNum, 0,30); 
       pop();

   }

   clearArrowFromRoles(){
    this.roleForArrowHead.arrowLink = null;
    this.roleForArrowTail.arrowLink = null; 
   }
    
}
    