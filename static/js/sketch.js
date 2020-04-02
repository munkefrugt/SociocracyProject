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


// Declare object
let numOfCircles = 10;
let circleId = 0;
let personId = 0;
let roleIdNum = 0;
// array of circles
//let circles = [];

// the actual people. 
let people = [];

// it seems that both let or "empty variable type" can be accesd from other classses. 

// let is normaly limited scope. 
//let testLet = 8888; 
//xtest = 99999;

let focusCircle = null;
let focusPerson = null; 
let focusRole = null; 

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
  
  frameRate(1); 
                                                                                  
  // input
  input = createInput();
  input.position(19, 19);

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
  changeAimBtn.position(19, 320);
  changeAimBtn.mousePressed(changeAim); 

  // change domain button
  
  changeDomainBtn = createButton('change domain');
  changeDomainBtn.position(19, 350);
  changeDomainBtn.mousePressed(changeDomain);
  /*
  // add person to circle
  addPersonToCircleBtn = createButton('add person to circle');
  addPersonToCircleBtn.position(19, 350);
  addPersonToCircleBtn.mousePressed(addPersonToCircle);
  */
  // add role to circle
  addRoleToCircleBtn = createButton('add role to circle');
  addRoleToCircleBtn.position(19, 350+30);
  addRoleToCircleBtn.mousePressed(addRoleToCircle);

  // add person to role
  addPersonToRoleBtn = createButton('add person to role');
  addPersonToRoleBtn.position(19, 350+30+30);
  addPersonToRoleBtn.mousePressed(addPersonToRole);

  // use push. 

  circles = [];

  circles.push(new PCircle(circleId));
  circles[0].name = "general"; 
  circles[0].y = 300; 

}

function draw() {

  background(0,100,150);
  angleMode(DEGREES);
  // make lines
  makeLines();
  // make everything into functions as much as possible. 
 

  // DISPLAY CIRCLES and ROLES: 

  for (let i = 0; i < circles.length; i++) {
    // display circles
    circles[i].display();
    print(circles[i].rolesInCircle);


    // DISPLAY ROLES: 
    // NEXT STEP: put everything below into this function to make it clear: 
    // use this as function name-- > displayRoles(circles[i]);

    let angle = 0;
    
    let angleDifference = 360/ circles[i].rolesInCircle.length;  
    let x0 = circles[i].x;
    let y0 = circles[i].y;
    for (let j = 0; j < circles[i].rolesInCircle.length; j++) {
      print("j  " +j);

      // give x and x for this role. 
      // role radius: 
      let eR = circles[i].rolesInCircle[j].radius; 
      // x0, y0 is center of circle

      let x1 = x0 + circles[i].radius * cos(angle);
      let y1 = y0 + circles[i].radius * sin(angle);
      
      circles[i].rolesInCircle[j].x = x1;
      circles[i].rolesInCircle[j].y = y1;
      

      // MAKE ROLES LIGHT UP. 
      // make other roles with same person light up.
      //lightRolesAndpeopleUp(circles[i].rolesInCircle[j]);      // reset role. 
      if(!circles[i].rolesInCircle[j].isFocusRole){
        circles[i].rolesInCircle[j].c = color(255);

      }


      if(focusRole != null && focusRole.person != null && circles[i].rolesInCircle[j].person != null){
        //print("isFocusRole1"); 

        
        // if the role circle's person name matches the focusrols
        if(focusRole.person.name == circles[i].rolesInCircle[j].person.name){
          print("match");
          print("print focus role true or false");
          
          // turn blue
          if (circles[i].rolesInCircle[j].isFocusRole){

            circles[i].rolesInCircle[j].c = color(0, 0, 255);

          }
          // make all other roles with same person green. 
          else {
            
            circles[i].rolesInCircle[j].c = color(0, 255, 0);

          }
          

        }
        else{
        //print("no match");

        circles[i].rolesInCircle[j].c = color(255);

        }
       
          
      }
      
      
     

      

      let c = circles[i].rolesInCircle[j].c;
      
      fill(c);
      stroke(0);
      strokeWeight(2);
      let eX = circles[i].rolesInCircle[j].x; 
      let eY = circles[i].rolesInCircle[j].y;
      
      ellipse(eX,eY,eR *2);

      angle = angle + angleDifference; 

      }
      
      
      // missing person for role
      /*else if(circles[i].rolesInCircle[j].person == null) {
        red (255, 0, 0);
      } 
      else {
        circles[i].rolesInCircle[j].c = color(255);     

      }*/

      //if lightUp
      /*
      if(circles[i].rolesInCircle[j].lightUp){
        // turn green
        if(circles[i].rolesInCircle[j].isFocusRole){

        }
        else{
          circles[i].rolesInCircle[j].c = color(0, 255, 0);
        }
      }
      // if not lightUp
      else if(!circles[i].rolesInCircle[j].lightUp){
        circles[i].rolesInCircle[j].c = color(255);
      }
      */
  }
  // make it into a function below. 
  // show info about circle
  if(focusCircle != null){
    stroke(0);
    strokeWeight(1);
    fill(255);
    let rectY = deleteCircleBtn.y+20; 
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
      text("Role: "+focusRole.roleDescription, 12+10, rectY+140);

      text("Description: "+focusRole.roleDescription, 12+10, rectY+160);
      text("domain: "+focusRole.domain, 12+10, rectY+180);
      text("term: "+focusRole.term, 12+10, rectY+200);

      
      if(focusRole.person != null){
        text("person with role : "+focusRole.person.name, 12+10, rectY+220);
      }
      

    }

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
function addRoleToCircle(){
  if(focusCircle != null){
  let role = new Role();
  focusCircle.rolesInCircle.push(role); 
  role.roleId = roleIdNum;
  
  print("create role with id:")
  print(role.roleId); 

  roleIdNum++; 
  
  }
  
}

function addPersonToCircle(){
  print("add person to circle"); 
  if(focusPerson != null){  
    // add a role to circle
    focusCircle.peopleInCircle.push(focusPerson); 
    print("add person to circle");
    //print(focusCircle.peopleInCircle);
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

  
}




function mouseClicked() {
  print("mouse clicked");

  // check roles to activate. 
  for (var i = 0; i < circles.length; i++) {
    for (let j = 0; j < circles[i].rolesInCircle.length; j++) {
    
      if(circles[i].rolesInCircle[j].isMouseInRole(mouseX,mouseY)){
        print("mouse in role"); 

        if(focusRole!= null){
          // make person circle white again
          focusRole.isFocusRole = false; 

          //circles[i].rolesInCircle[j].isFocusRole = false; 
          print("made false")
          print(circles[i].rolesInCircle[j].isFocusRole);
          focusRole.c = color(255);
          focusRole = null; 
        }


        // new focus Role
        focusRole = circles[i].rolesInCircle[j]; 
        circles[i].rolesInCircle[j].isFocusRole = true; 
        print("made true")

        print(circles[i].rolesInCircle[j].isFocusRole);

        circles[i].rolesInCircle[j].c = color(0,0,255); 

       

        break
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
      break
      
      
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

function addPersonToRole() {
  if(focusPerson != null && focusRole != null){
    //add person to role. 
    focusRole.person = focusPerson; 
    // add role to person
    focusPerson.roles.push(focusRole);
    /*
    print("name of person in role"); 
    print(focusRole.person.name);
    print("focusPerson.roles");
    print(focusPerson.roles)
    */
  }
  else{
    alert("role and person needs to be selected at the sametime to match them"); 
  }
}

// take care of everything that has to do with coloring/ lighting up roles or person
function lightRolesAndpeopleUp(){
  // light roles


  // light people

}


function makeLines(){
  for (let i = 0; i < circles.length; i++) {

    if(circles[i].parrrentCircle != null){
      stroke(0);
      strokeWeight(2);
      //fill(255);
      line(circles[i].x,circles[i].y,circles[i].parrrentCircle.x,circles[i].parrrentCircle.y);
    }
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