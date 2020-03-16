// java script


var i = 0;

// the let thing is like making  it global. ?
let Circle = class {
  constructor(ctx,name,x,y,r) {
    this.name = name;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "white"; 
  }

  //  this is a function 
  showCircle(){
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false)
      this.ctx.fill()
      this.ctx.stroke();
      // show name


  }

  changeColor(x){
    this.color = x;
  }

  setName(name){
    this.name = name; 

  }
  

  showName(){
    this.ctx.fillStyle = "black";
    this.ctx.fillText(this.name, this.x-this.r, this.y-10-this.r);
  }
  // not usd
  makeline(){
    console.log("test line");
    
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(400, 400);
    this.ctx.stroke();
   
  }
  

};