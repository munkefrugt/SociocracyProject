// Declare object
let numOfCircles = 10;
let circleId = 0;
// array of circles
let circles = [];
let people = [];

// it seems that both let or "empty variable type" can be accesd from other classses. 

// let is normaly limited scope. 
//let testLet = 8888; 
//xtest = 99999;

let focusCircle = null;
let lastFocusCircle = null;
let inputButton;
let newCircleBtn;
let deleteCircleBtn;
//let latestAddedCircle; 



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(1); 

  // input
  input = createInput();
  input.position(19, 19);

  inputButton = createButton('user input');
  inputButton.position(input.x + input.width, 19);
  inputButton.mousePressed(userInput);

  // make new circle button
  newCircleBtn = createButton('add circle');
  newCircleBtn.position(19,inputButton.height+19);
  newCircleBtn.mousePressed(addCircle);  
  
  // delete circle button. 

  deleteCircleBtn = createButton('delete circle');
  deleteCircleBtn.position(19, inputButton.height + newCircleBtn.height+19);
  deleteCircleBtn.mousePressed(deleteCircle); 

  // use push. 
  circles.push(new PCircle(circleId));


}

function draw() {

  background(50, 89, 100);

  // make lines
  // activate again: for lines

  //line(400,400,600,600);
  
  
  //line(circles[i].x,circles[i].y,circles[i].parrrentCircle.x,circles[i].parrrentCircle.y);
  
  for (let i = 0; i < circles.length; i++) {
    //print("start lines");
    print("i = "+i); 
    //print(circles[i])
    print("circles[i].parrrentCircle" );
    
    print(circles[i].parrrentCircle)

    if(circles[i].parrrentCircle != null){

      print("line"); 
      line(circles[i].x,circles[i].y,circles[i].parrrentCircle.x,circles[i].parrrentCircle.y);
    }
  } 
  
    
  
  // show all cirles. 
  for (let i = 0; i < circles.length; i++) {
    // if circle is parrent make line
    
    circles[i].display();

    
  }
  
  // display lines. 

}


// functions out of draw loop.
function userInput() {
  let userInput = input.value();
  print(userInput); 
  focusCircle.name = userInput; 
}
function addCircle() {
  
  if (focusCircle != null){

  print("add new Circle");
  circleId ++; 
  newCircle = new PCircle(circleId)
  // give it a parrent
  circles.push(newCircle);

  newCircle.parrrentCircle = focusCircle;
  //newCircle.setParrent(focusCircle);
  // add circle; 
  newCircle.c = color(0,200,200);

  // give the parrent circle a child. 
  focusCircle.makeChild(newCircle); 
  }
  if (focusCircle == null){
    alert("choose a focus circle");
  }

  
  // make line from parent to child circle. 
}

// messed up!!
function deleteCircle() {
  print("delete");

  // rewrite. 

  /*


  // get the id of the circle that gets deleted.
  let locaDeleteId = focusCircle.circleId; 

  if(locaDeleteId != 0){
  // give the current focus circle's children a new parrent. 

    // find children of focus circle: 
      // test get names of children. 
      print("children of focus circle");


  // find new parrent
  newParrent = focusCircle.parrrentCircle; 
  print("newParrent" + newParrent.name);
  // take the chidren of this focus circle that is getting deleted -
  //  and give them a new parrent.
  focusCircle.giveChildrenNewParrent(newParrent); 

  

  
    // delete from circles array 
    circles.splice(locaDeleteId,1);
      
    // change the ids. now the array has moved!

    while(locaDeleteId <  circles.length){
      circles[locaDeleteId].circleId --; 
      locaDeleteId ++; 
    }
  }
  else alert("you cant delete this circle!"); 
  print(circles); 
  
 
 
  

  
*/
}


function mouseClicked() {
    
  // search for new circle to activate

  for (var i = 0; i < circles.length; i++) {
    
    var x0 = circles[i].x;
    var y0 = circles[i].y;
    
    distance = dist(x0,y0,mouseX,mouseY);
    //var distance = Math.sqrt((mouseX-x0)*(mouseX-x0) + (mouseY-y0)*(mouseY-y0));
    
    if (distance < circles[i].radius) {
      console.log("clicked");
      
      // important about focus Circle:
      // reason for focus circle:  so the old one can be disabled. 
      // the focus is also used as parent circle for new circles. 
      
      // save what circle was the last focus circle so we can clear it.
      /*
      lastFocusCircle = focusCircle;
      lastFocusCircle.c = color(255, 255,255);
      lastFocusCircle = null;
      */
      

      // update focus circle:
      // make current focus circle white
      if (focusCircle != null){
        focusCircle.c  = color(255);

      }
      // make new selected circle orange
      focusCircle = circles[i]; 
      circles[i].setColor();

      
      break;
    }
  }
  
  
  
  // prevent default, dont delete this line: 
  return false;
}

function mouseDragged() { 
  //print("mouse dragged" + mouseDraggedTest); 
  //mouseDraggedTest++; 
  // get id
  let focusId = focusCircle.circleId;
  circles[focusId].x = mouseX;
  circles[focusId].y = mouseY;
  
  //print("x"+focusCircle.x);
  //print("y"+focusCircle.y);


} 