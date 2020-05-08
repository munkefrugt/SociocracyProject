class Role {
  constructor() {
    this.name = "give roll a name"; 
    this.roleDescription = "make a description"; 
    this.person; 
    this.term = "give a term"; 
    this.domain = "give a domain"; 
    this.x;
    this.y; 
    
    this.radius = 10; 
    this.roleId; 
    this.c = color(255);
    print("new role added");
    // make it light up
    this.lightUp = false; 
    this.isFocusRole = false; 
    this.belongsInCircle; 
    this.roleArrayNum; 
    
    
    // this role is the head another is the tail:
    this.roleForArrowTail; 
    this.roleForArrowHead; 
    this.positionGettingChangedByUser = false; 
    this.keepPosition = false; 
    this.radialNormalVector; 
    this.angleInCircle; 
  }

  setX(x1){
    this.x = x1; 
  }

  setY(y1){
    this.y = y1; 
  }
  isMouseInRole(px,py){
    let d = dist(px,py,this.x,this.y);
    if(d < this.radius){
      return true; 
    }
    else{
      return false;
    }
  }
}

