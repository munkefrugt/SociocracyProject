// Declare object
let numOfCircles = 10;
let circleId = 0;
let personId = 0;
// array of circles
let circles = [];
let people = [];

// it seems that both let or "empty variable type" can be accesd from other classses. 

// let is normaly limited scope. 
//let testLet = 8888; 
//xtest = 99999;

let focusCircle = null;
let focusPerson = null; 

let inputButton;
let newCircleBtn;
let deleteCircleBtn;
let changeAimBtn;
let ChangeDomainBtn; 
let newPersonBtn

let person1; 
//let activateCircleInfo = true;  
//let latestAddedCircle; 



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(20); 

  // input
  input = createInput();
  input.position(19, 19);

  inputButton = createButton('change name of circle');
  inputButton.position(input.x + input.width, 19);
  inputButton.mousePressed(changeNameOfCircle);

  // make new circle button
  newCircleBtn = createButton('add circle');
  newCircleBtn.position(19,inputButton.height+19);
  newCircleBtn.mousePressed(addCircle);  

  // make new person in circle button
  newPersonBtn = createButton('create new person');
  newPersonBtn.position(19+100,inputButton.height+19);
  newPersonBtn.mousePressed(newPerson); 
  
  // delete circle button. 

  deleteCircleBtn = createButton('delete circle');
  deleteCircleBtn.position(19, inputButton.height + newCircleBtn.height+19);
  deleteCircleBtn.mousePressed(deleteCircle); 

  // change aim button. 

  changeAimBtn = createButton('change Aim');
  changeAimBtn.position(19, 320);
  changeAimBtn.mousePressed(changeAim); 

  // change domain button
  
  changeDomainBtn = createButton('change domain');
  changeDomainBtn.position(19, 350);
  changeDomainBtn.mousePressed(changeDomain);
  
  // add person to circle
  addPersonToCircleBtn = createButton('add person to circle');
  addPersonToCircleBtn.position(19, 350);
  addPersonToCircleBtn.mousePressed(addPersonToCircle);

  // use push. 
  circles.push(new PCircle(circleId));

  person1 = new Person();
  // create a person and add it to the general circle


}

function draw() {

  background(0,100,150);
  angleMode(DEGREES);

  // make lines
  for (let i = 0; i < circles.length; i++) {

    if(circles[i].parrrentCircle != null){
      stroke(0);
      strokeWeight(2);
      //fill(255);
      line(circles[i].x,circles[i].y,circles[i].parrrentCircle.x,circles[i].parrrentCircle.y);
    }
  } 
  
  // DISPLAY CIRCLES: 

  // show all cirles. 
  for (let i = 0; i < circles.length; i++) {
    circles[i].display();
    
  }
  
  // show info about circle
  if(focusCircle != null){
    stroke(0);
    strokeWeight(1);
    fill(255);
    rect(12, 100, 200, 200);
    
    fill(0);
    noStroke();
    textAlign(LEFT); 
    text("aim : "+focusCircle.aim, 12+10, 200);
    text("domain : "+focusCircle.domain, 12+10, 220);
    

  }


  // show all people in the side bar: 
  for (let i = 0; i < people.length; i++) {
    people[i].display();
    
  }

  
}


// functions out of draw loop.
function changeNameOfCircle() {
  let userInput = input.value();
  //print(userInput); 
  focusCircle.name = userInput; 
}

function addPersonToCircle(){
  print("add person to circle"); 
  if(focusPerson != null){  
    focusCircle.peopleInCircle.push(focusPerson); 
    print("add person to circle");
    print(focusCircle.peopleInCircle);
    // 
    
  }
}

// create a new person in system
function newPerson(){
  
  if (focusCircle != "null"){
    
    // get name from input
    let userInput = input.value();
    if( userInput.length >=  3){
      print("make new person");

      //alert("give new person a name in the")
    let person = new Person(userInput,personId);
    
    
    //focusCircle.peopleInCircle.push(person); 

    
    people.push(person);
    personId ++; 
    }
    else{
      alert("give person a name at least 3 chacracteres"); 
    }
  }
  

}

function addCircle() {
  
  if (focusCircle != null){

  print("add new Circle");
  circleId ++; 
  newCircle = new PCircle(circleId)
  // give it a parrent
  circles.push(newCircle);

  newCircle.parrrentCircle = focusCircle;
  // works
  print("new parrent name : "+ newCircle.parrrentCircle.name);
  print(newCircle.parrrentCircle);
  
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




function mouseClicked() {
  print("mouse clicked");
  for (let i = 0; i < people.length; i++) {
    print("check people");  
    if(people[i].isMouseInPerson(mouseX,mouseY)){
      print("mouse is in person circle.");
      // mouse is in person.
      // cancel olg focus person
      
      // reset focus person clickability.
      if(focusPerson!= null){
        // make person circle white again
        focusPerson.c = color(255);
        focusPerson = null; 
      }
      

      // new focus person
      focusPerson= people[i];
      print(focusPerson);
      people[i].c = color(255,255,0);
      break
      
      
    }

    
  }
  //print("next loop"); 
  // search for new circle to activate


  for (var i = 0; i < circles.length; i++) {
    if(circles[i].isMouseInCircle(mouseX,mouseY)){

      console.log("clicked");
      
      // important about focus Circle:
      // reason for focus circle:  so the old one can be disabled. 
      // the focus is also used as parent circle for new circles. 
      
      // save what circle was the last focus circle so we can clear it.

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

  if(focusCircle.isMouseInCircle(mouseX,mouseY)){
      //print("mouse dragged" + mouseDraggedTest); 
  //mouseDraggedTest++; 
  // get id
  let focusId = focusCircle.circleId;

  circles[focusId].x = mouseX;
  circles[focusId].y = mouseY;
  }

} 

function doubleClicked() {
  // if inside of focuscircle
  
  if(focusCircle.isMouseInCircle(mouseX,mouseY)){
    print("double clicked");
    // show aims and domain
    
      // make box
      activateCircleInfo = true; 


    

  }

  
  
}

function changeDomain(){
  if(focusCircle != null){
    let userInput = input.value();
    //print(userInput); 
    focusCircle.domain = userInput; 
  }
}


function changeAim(){
  if(focusCircle != null){
  let userInput = input.value();
  //print(userInput); 
  focusCircle.aim = userInput; 
  }
}

// messed up!!
function deleteCircle() {
  print("delete");
  /*

  // rewrite. 

  


  // get the id of the circle that gets deleted.
  let locaDeleteId = focusCircle.circleId; 
  // test if parrents are there. 
  print("delete function, test parrent: "+ circles[locaDeleteId].parrrentCircle.name);
  print(circles[locaDeleteId].parrrentCircle);

  if(locaDeleteId != 0 ){
    
    print("deleting"); 
    newParrent = circles[locaDeleteId].parrrentCircle;
    //give the children new parretns
    print("circles[locaDeleteId].childrenOfThisCircle")
    print(circles[locaDeleteId].childrenOfThisCircle); 


    childArray = circles[locaDeleteId].childrenOfThisCircle;

    for (let i = 0; i < childArray.length; i++) {
      childArray[i].parrrentCircle = newParrent;  
      print("new parrent for child : " + childArray[i].name);
      print("parrent name: " + childArray[i].parrrentCircle.name);

    }

    // delete
    circles.splice(locaDeleteId,1);

  


    // change the ids. now the array has moved!
    print("print ids")
    for (let i = circles.length-1; i >= 0; i--) {
      print(i); 
      print(circles[i]);
      circles[locaDeleteId].circleId --; 

    }
    
    while(locaDeleteId <  circles.length){
      circles[locaDeleteId].circleId --; 
      locaDeleteId ++; 
    }
  }
  */

  /*
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