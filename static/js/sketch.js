// by martin moltke wozniak -  munkefrugt@gmail.com
 /*
 plan:

 a mother and a child circle will share 2 roles, lead link and rep link. 
  a lead link will both will have the same person and same color. 


  when a person is pressed or a role, (right side og screen ).
  make it light up everywhere that person is.

*/


/*

clean code: 
https://www.youtube.com/watch?v=UjhX2sVf0eg

#1: You're responsible for code quality.
#2: Use meaningful names.
#3: Write code that expresses intent.
#4: Code should speak for itself. Less comments = less maintenance.
#5: Leave the code better than you found it.
#6: Single-responsibility code.
i.e function does 1 thing well. Less arguments = better function.
classes: most methods use most of the class' properties.
#7: Tests (TDD).
#8: Work on big picture skeleton, then fill in the details later 
(interface first, implementation later).
#9: Independent components that can be used in different places.
#10: Master your craft.
*/


let numOfCircles = 10;
let circleId = 0;
let personId = 0;
let roleIdNum = 0;

// the actual people. 
let people = [];


let focusCircle = null;
let focusPerson = null; 
let focusRole = null; 
let lastFocusRole; 


let inputButton;
let newCircleBtn;
let deleteCircleBtn;
let changeAimBtn;
let ChangeDomainBtn; 
let newPersonBtn
let mouseHitemptySpace = true; 
let buttonIsPressed = false; 
//let roleInRepositioning = false; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(10); 
  angleMode(DEGREES);

  input = createInput();
  input.position(19, 19);

  makeButtons();


  circles = [];

  circles.push(new PCircle(circleId));
  circles[0].name = "general"; 
  circles[0].y = 300; 

}

function draw() {

  background(0,100,150);
  
  makeLines();

  //tweekRolePositions(); 

  makeLinkArrows();

 
  displayCirclesAndRoles();

  displayCircleInfo();

  displayPeople();
   
}



// functions out of draw loop.

function makeButtons(){

  inputButton = createButton('change name of circle');
  inputButton.position(input.x + input.width, 19);
  inputButton.mousePressed(changeNameOfCircle);

  // make new circchildrenOfThisCirclechildrenOfThisCirclele button
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
  changeAimBtn.position(19, 350);
  changeAimBtn.mousePressed(changeAim); 

  
  changeDomainBtn = createButton('change domain');
  changeDomainBtn.position(changeAimBtn.width+19, 350);
  changeDomainBtn.mousePressed(changeDomain);
  
  addRoleToCircleBtn = createButton('add role to circle');
  addRoleToCircleBtn.position(19, 350+30);
  addRoleToCircleBtn.mousePressed(addRoleToCircle);

  addPersonToRoleBtn = createButton('add person to role');
  addPersonToRoleBtn.position(19, 350+30+30);
  addPersonToRoleBtn.mousePressed(addPersonToRole);
  
  changeNameOfRoleBtn = createButton('change Name Of Role');
  changeNameOfRoleBtn.position(19, 350+30+60);
  changeNameOfRoleBtn.mousePressed(changeNameOfRole);
  
  changeRoleDescriptionBtn = createButton('change role description');
  changeRoleDescriptionBtn.position(19, 350+30+90);
  changeRoleDescriptionBtn.mousePressed(changeRoleDescription);

  

  changeRoleTermBtn = createButton('change Role Term');
  changeRoleTermBtn.position(19, 350+60+90+30);
  changeRoleTermBtn.mousePressed(changeRoleTerm);

  

  changeRoleDomainBtn = createButton('change Role Domain');
  changeRoleDomainBtn.position(19, 350+60+90+60);
  changeRoleDomainBtn.mousePressed(changeRoleDomain);


  makeRoleLinkBtn = createButton('make Role Link');
  makeRoleLinkBtn.position(19, 350+60+90+90);
  makeRoleLinkBtn.mousePressed(linkRoles);

  repositionRoleInCircleBtn = createButton('reposition Role In Circle');
  repositionRoleInCircleBtn.position(19, 350+60+90+90+30);
  repositionRoleInCircleBtn.mousePressed(repositionRoleInCircle);

  deleteRoleBtn = createButton('delete role');
  deleteRoleBtn.position(300, 350+60+90+90+30);
  deleteRoleBtn.mousePressed(deleteRole);

}

function changeNameOfCircle() {
  let userInput = input.value();
  //print(userInput); 
  focusCircle.name = userInput; 
}

function addRoleToCircle(){
  if(focusCircle != null){
  let role = new Role();
  focusCircle.rolesInCircle.push(role); 
  role.roleId = roleIdNum;
  role.belongsInCircle =  focusCircle;
  
  //print(role.belongsInCircle); 
  
  print("create role with id:")
  print(role.roleId); 

  // give role arraynum. 
  let currentNumberOfRolesInCircle = focusCircle.rolesInCircle.length
  role.roleArrayNum = currentNumberOfRolesInCircle ++; 

  roleIdNum++; 
  buttonIsPressed = true; 
  }
  
}

function addPersonToCircle(){
  print("add person to circle"); 
  if(focusPerson != null){  
    // add a role to circle
    focusCircle.peopleInCircle.push(focusPerson); 
    
    
  }
}

// create a new person in system
function newPerson(){
  
  if (focusCircle != "null"){
    
    // get name from input
    let userInput = input.value();
    if( userInput.length >=  2){

    let person = new Person(userInput,personId);
    
    people.push(person);
    personId ++; 
    }
    else{
      alert("give person a name at least 3 chacracteres"); 
    }
  }
  
  buttonIsPressed = true; 

}

function addCircle() {
  
  if (focusCircle != null){

  circleId ++; 
  newCircle = new PCircle(circleId)
  
  // give it a parrent
  circles.push(newCircle);
  newCircle.circlesArrayNum = circles.length -1; 

  newCircle.parrrentCircle = focusCircle;

  //print("new parrent name : "+ newCircle.parrrentCircle.name);
  //print(newCircle.parrrentCircle);
  
  newCircle.c = color(0,200,200);

  // give the parrent circle a child. 
  focusCircle.makeChild(newCircle); 
  }
  if (focusCircle == null){
    alert("choose a focus circle");
  }

  buttonIsPressed = true; 

}




function mouseClicked() {
  print("mouse clicked");

  

  // check roles to activate. 
  for (var i = 0; i < circles.length; i++) {
    for (let j = 0; j < circles[i].rolesInCircle.length; j++) {
    let currentLoopRole = circles[i].rolesInCircle[j]; 
      if(currentLoopRole.isMouseInRole(mouseX,mouseY)){
        print("mouse in role"); 

        if(focusRole!= null){
          // make person circle white again
          focusRole.isFocusRole = false; 

          //currentLoopRole.isFocusRole = false; 
          print(currentLoopRole.isFocusRole);
          focusRole.c = color(255);
          lastFocusRole = focusRole; 
          focusRole = null; 
        }


        // new focus Role
        focusRole = currentLoopRole; 
        currentLoopRole.isFocusRole = true; 

        print(currentLoopRole.isFocusRole);

        currentLoopRole.c = color(0,0,255); 

        mouseHitemptySpace = false;
        print("mouseHitemptySpace : " + mouseHitemptySpace);
        

        return;
      }
      
    }
  }


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


       mouseHitemptySpace = false;
       print("mouseHitemptySpace : " + mouseHitemptySpace);
        


       return;
      
      
    }

  }

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

      mouseHitemptySpace = false;
      print("mouseHitemptySpace : " + mouseHitemptySpace);

      return;
    }
  }

  // end of mouseclicked
  mouseHitemptySpace = true; 
  print("mouseHitemptySpace : " + mouseHitemptySpace);
  if (buttonIsPressed){
    print("buttonIsPressed");
    buttonIsPressed = false;
  }
  else{
    if(focusRole != null && focusRole.positionGettingChangedByUser ){
      focusRole.keepPosition = true; 
      //roleInRepositioning = false; 

    }

    
    focusRole = null;
    focusPerson = null;
    focusCircle = null;


  }

  // prevent default, dont delete this line: 
  return false;
}

function mouseDragged() { 
    if(focusCircle.isMouseInCircle(mouseX,mouseY)){
      //print("mouse dragged" + mouseDraggedTest); 
      //mouseDraggedTest++; 
      // get id
      let focusId = focusCircle.circlesArrayNum;
      print(focusId);
      circles[focusId].x = mouseX;
      circles[focusId].y = mouseY;
    }
 
} 

function doubleClicked() {
  // if inside of focuscircle
  if(focusCircle != null){
    if(focusCircle.isMouseInCircle(mouseX,mouseY)){
      print("double clicked");
      // show aims and domain
      
        // make box
        activateCircleInfo = true; 
  
        return; 

    }
  }
}

function changeDomain(){
  if(focusCircle != null){
    let userInput = input.value();
    //print(userInput); 
    focusCircle.domain = userInput; 
  }
  buttonIsPressed = true; 

}




function changeAim(){
  if(focusCircle != null){
  let userInput = input.value();
  //print(userInput); 
  focusCircle.aim = userInput; 
  }
  buttonIsPressed = true; 

}

function addPersonToRole() {
  if(focusPerson != null && focusRole != null){
    //add person to role. 
    focusRole.person = focusPerson; 
    // add role to person
    focusPerson.roles.push(focusRole);
    
    print("add person to role");

    buttonIsPressed = true; 
  }
  else{
    alert("role and person needs to be selected at the sametime to match them"); 
  }
}

function changeNameOfRole(){
  if(focusRole != null){

    let userInput = input.value();
    print("changeNameOfRole"); 
    focusRole.name = userInput; 
    print(focusRole.name);
    }
  buttonIsPressed = true; 

}

function changeRoleDescription(){
  if(focusRole != null){
    let userInput = input.value();
    focusRole.roleDescription = userInput; 
    }
  buttonIsPressed = true; 

}

function changeRoleTerm(){
  if(focusRole != null){
    let userInput = input.value();
    focusRole.term = userInput; 
    }
  buttonIsPressed = true; 

}

function changeRoleDomain(){
  if(focusRole != null){
    let userInput = input.value();
    focusRole.domain = userInput; 
    }
  buttonIsPressed = true; 

}

function linkRoles(){
  // choose on focus role, then an other to link with. 
  if (focusRole != null){
    
    focusRole.roleForArrowTail = lastFocusRole;
    let arrowTailRole = focusRole.roleForArrowTail 
    arrowTailRole.roleForArrowHead = focusRole;
    
  }
  else{ alert("choose a focus role, the last chosen role will be the tail of the arrow")}
  
  buttonIsPressed = true; 

}

function repositionRoleInCircle(){

  if(focusRole != null){
    focusRole.positionGettingChangedByUser = true;
    focusRole.keepPosition = false; 
    //roleInRepositioning = true; 

  }
  else{ alert("select a role then press 'repositionRoleInCircle' and drag the role to where you want it in the circle");  }
  
  buttonIsPressed = true; 


}
// deleteRole
function deleteRole(){
  print("delete role");

  if(focusRole != null){

    let circleWithRoleIn = focusRole.belongsInCircle; 
    let arrayGettingSpliced = circleWithRoleIn.rolesInCircle;
    // make sure roleArrayNum get made. !! when role is made.
    let locaDeleteNum = focusRole.roleArrayNum; 
    locaDeleteNum--;
    print(arrayGettingSpliced);

    arrayGettingSpliced.splice(locaDeleteNum,1 );
    print("locaDeleteNum"+ locaDeleteNum);
    for (let i = locaDeleteNum; i < arrayGettingSpliced.length; i++) {
      arrayGettingSpliced[i].roleArrayNum --; 
      
    }
    print(arrayGettingSpliced);

  }
  else{ alert("select a role to delete");  }

  buttonIsPressed = true; 
  
}


function makeLines(){
  for (let i = 0; i < circles.length; i++) {
    if(circles[i].parrrentCircle != null){
      stroke(0);
      strokeWeight(2);
      line(circles[i].x,circles[i].y,circles[i].parrrentCircle.x,circles[i].parrrentCircle.y);            
    }
  } 
}


function makeLinkArrows() {

  for (let i = 0; i < circles.length; i++) {

    for (let j = 0; j < circles[i].rolesInCircle.length; j++) {
    let currentLoopRole = circles[i].rolesInCircle[j]; 

      if(currentLoopRole.roleForArrowTail != null){

        let x0 = currentLoopRole.roleForArrowTail.x;
        let y0 = currentLoopRole.roleForArrowTail.y; 
        let x1 = currentLoopRole.x; // target
        let y1 = currentLoopRole.y;

        stroke(0);
        strokeWeight(2);
        let vTail = createVector(x0, y0);
        let vTargetInCenterOfRole = createVector(x1, y1);
        //fill(color(255)); 
        //line(vTail.x,vTail.y, vTargetInCenterOfRole.x,vTargetInCenterOfRole.y);

        // point of arrow   vTail - vTargetInCenterOfRole
        let pointOfArrow = p5.Vector.sub(vTail, vTargetInCenterOfRole)
        pointOfArrow.normalize();  // make a unitvector
        pointOfArrow.mult(currentLoopRole.radius+2);
        pointOfArrow.add(vTargetInCenterOfRole);


        vectorOnBase = p5.Vector.sub(pointOfArrow,vTail );
        drawArrow(vTail,vectorOnBase,'red'); 
      }      
    }  
  }
}

function displayCirclesAndRoles(){
  for (let i = 0; i < circles.length; i++) {
    // display circles

    if(mouseHitemptySpace){
      circles[i].c = color(255);
    }
    circles[i].display();


    // DISPLAY ROLES: 
    // NEXT STEP: put everything below into this function to make it clear: 
    // use this as function name-- > displayRoles(circles[i]);

    let angle = 0;
    
    let angleDifference = 360/ circles[i].rolesInCircle.length;  
    let x0 = circles[i].x;
    let y0 = circles[i].y;
    for (let j = 0; j < circles[i].rolesInCircle.length; j++) {

      let currentLoopRole = circles[i].rolesInCircle[j]; 
      
      let ellipseRadius = currentLoopRole.radius; 


      
      // change position 
      // 3 options: 
      /* 1 change roleposition automaticly

         2 change role with mouse await click in empty space. 

         3 use previus stored position. 

      */ 

      // role is automaticly changed acording to calculation. 
      if(!currentLoopRole.positionGettingChangedByUser && currentLoopRole.keepPosition == false ){
        
        let x1Auto = x0 + circles[i].radius * cos(angle);
        let y1Auto = y0 + circles[i].radius * sin(angle); 

        currentLoopRole.x = x1Auto;
        currentLoopRole.y = y1Auto;
      }

      // change role position  with mouse await click in empty space. 
      else if(currentLoopRole.positionGettingChangedByUser && !currentLoopRole.keepPosition){
        print("position getting changed not keept");
        print("positionGettingChangedByUser"); 
        
        // calculate the vector
        let mouseVector = createVector(mouseX, mouseY);
        // 
        let CircleCenterVectorFromOrigo = createVector(x0, y0);

        let radialVector = mouseVector.sub(CircleCenterVectorFromOrigo);

        radialVector.normalize();
        
        currentLoopRole.radialNormalVector = radialVector; 
        let storedRadialVector = currentLoopRole.radialNormalVector;
        storedRadialVector.mult(circles[i].radius);
        
        // store angle between 2 vectors, 
        let vReference = createVector(50, 0);
        currentLoopRole.angleInCircle = vReference.angleBetween(radialVector);

        let finalRoleLocation = CircleCenterVectorFromOrigo.add(storedRadialVector);
        
        currentLoopRole.x = finalRoleLocation.x;
        currentLoopRole.y = finalRoleLocation.y;
        // store angle in relation to center of circle. 

        

        
      }
      // use previus stored position
      else if(currentLoopRole.keepPosition ){

        currentLoopRole.positionGettingChangedByUser = false; 
        //print("NormalVector X " +currentLoopRole.radialNormalVector.x);
        //print("NormalVector Y " +currentLoopRole.radialNormalVector.y);
        //print(angle);
        let circleCenterVector = createVector(x0, y0);

        let finalV = circleCenterVector.add(currentLoopRole.radialNormalVector);

        currentLoopRole.x = finalV.x;
        currentLoopRole.y = finalV.y;

        
        

      } 

      else{
        print("else ERROR? "); 
        //alert("error soemeting went wrong with role positioning"); 
      }

      
      

      // MAKE ROLES LIGHT UP. 
      // make other roles with same person light up.
      //lightRolesAndpeopleUp(currentLoopRole);      // reset role. 
      
      // if mouse clicked something
      if( !mouseHitemptySpace){
        if(!currentLoopRole.isFocusRole){
          currentLoopRole.c = color(255);
  
        }
        if (focusPerson != null && focusPerson == currentLoopRole.person){
          currentLoopRole.c = color(0, 255, 0);
          //print("show roles from person");
        }
  
  
  
  
  
  
        if(focusRole != null && focusRole.person != null && currentLoopRole.person != null){
  
          
          // if the role circle's person name matches the focusrols
          if(focusRole.person.name == currentLoopRole.person.name){
            //print("match");
            
            //  blue
            if (currentLoopRole.isFocusRole){
  
              currentLoopRole.c = color(0, 0, 255);
  
            }
            else {
              //green
              currentLoopRole.c = color(0, 255, 0);
  
            }
                   
          }
          
          else{
          currentLoopRole.c = color(255);
          }     
            
        }


      }
      // if mouse didnt hit anything make everything white. 
      else {
        currentLoopRole.c = color(255);
      }
      
      

      let c = currentLoopRole.c;
      
      fill(c);
      stroke(0);
      strokeWeight(2);
      let eX = currentLoopRole.x; 
      let eY = currentLoopRole.y;
      

      angle = angle + angleDifference; 
      // if role pos is not change by user then automake the ellipse. 
        ellipse(eX,eY,ellipseRadius *2);

      

    }  
  }

}
function displayCircleInfo(){

  if(focusCircle != null){
    stroke(0);
    strokeWeight(1);
    fill(255);
    let rectY = newCircleBtn.y+20; 
    rect(12, rectY, 300, 220);
    
    fill(0);
    noStroke();
    textAlign(LEFT);
    textSize(16); 
    text("circle info:",22, rectY+20);
    text("Circle name: "+focusCircle.name, 22, rectY+40);
    text("Circle aim: "+focusCircle.aim, 12+10, rectY+ 60);
    text("Circle domain: "+focusCircle.domain, 22, rectY+80);
    

    
    if(focusRole != null ){
      text("****************** :", 22, rectY+100);

      text("Role info:", 22, rectY+120);
      text("Role: "+focusRole.name, 12+10, rectY+140);

      text("Description: "+focusRole.roleDescription, 12+10, rectY+160);
      text("domain: "+focusRole.domain, 12+10, rectY+180);
      text("term: "+focusRole.term, 12+10, rectY+200);

      
      if(focusRole.person != null){
        text("person with role : "+focusRole.person.name, 12+10, rectY+220);
      }
    }
  }
}

function displayPeople(){
  // show all people in the side bar: 
  for (let i = 0; i < people.length; i++) {
    if(mouseHitemptySpace){
      people[i].c = color(255);
    }
    people[i].display();
    
  }

}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

function deleteCircle() {
  

  let locaDeleteNum = focusCircle.circlesArrayNum; 

  if(locaDeleteNum != 0 ){
    
    print("deleting"); 
    newParrent = circles[locaDeleteNum].parrrentCircle;
    //give the children new parretns
    print("circles[locaDeleteId].childrenOfThisCircle")
    print(circles[locaDeleteNum].childrenOfThisCircle); 


    childArray = circles[locaDeleteNum].childrenOfThisCircle;

    for (let i = 0; i < childArray.length; i++) {
      childArray[i].parrrentCircle = newParrent;  
      print("new parrent for child : " + childArray[i].name);
      print("parrent name: " + childArray[i].parrrentCircle.name);

    }
    //print(circles); 

    // delete
    circles.splice(locaDeleteNum,1);

  


    // change the ids. now the array has moved!

    // check this for making a tree. 
    // https://stackoverflow.com/questions/19330731/tree-implementation-in-java-root-parents-and-children
    
    // locaDeleteNum = 1;
    for (let i = locaDeleteNum; i < circles.length; i++) {
      circles[i].circlesArrayNum --; 
      
    }
  }
 
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}