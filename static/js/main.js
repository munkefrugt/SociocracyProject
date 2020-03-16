
/* 
By martin moltke wozniak in collaboration with Sociocracy for all 
** notes: 
"RUN Project/debug" press F5 in Visual studio code. 
and to stop press shift + F5


When testing in browser, clear the cache by Ctrl + F5 , run in incognito mode. 
use web worker. https://www.w3schools.com/html/html5_webworkers.asp

 GITHUB: goto brach symbol. in top right corner press "check sign" to commit. 
  then  "..." -> "push to" 
*/ 


// how the program could be:  (DONT just make a lot of circles)
// check if circle has been clicked. 
  //if clicked  make a new circle (later on a button/ menu of what to do) 
      // 1  new circle
        // message "click where you want the center of the new circle"
        // - send coordinates of new circle. by a mouse click. 
          // - give it a name

      // 2  circle members
      // 3  logbook of circle
      // 4  decisions of circle  
      // 5  reposition circle 

//project below:
//************************************************** 
// start the canvas
console.log("general");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var w = canvas.width;
var h = canvas.height;
var mouseX;
var mouseY;
// array that holds all circles:
var circleArray = [];
//array to hold members
//var membersArray = [];


// make the first circle  general circle
let generalCircle = new Circle(ctx,"generalCircle",w/2,h/2, 30 );ctx.font = "20px Georgia";
ctx.fillText("Hello World!", 10, 50);

//let testCircle = new Circle(ctx,"testCircle",w/2+30,h/2+30, 30 );

circleArray.push(generalCircle);
//circleArray.push(testCircle);

generalCircle.showCircle();
//testCircle.showCircle();
console.log(circleArray.length);

// deafual no circle is selected or infocus
var focusCircle = null; 
console.log(focusCircle);
var circleGettingPlaced = false; 
var ifNewCircleButtonPressed = false; 

function activateNewCircle() {
  //alert("botton clicked , press for new circle coordinates");
  // make new circle
  if(focusCircle != null){
    ifNewCircleButtonPressed = true; 
  }
  if(focusCircle == null){
    alert("No circle is chosen to build onto. Please choose a focus circle");
  }
}

function exitFocusCircle() {
  // make all circles white
  // (close all information if any)
  console.log("exit circle")
  focusCircle = null; 
}
function changeName() {
  
  console.log("changeName");
  if(focusCircle != null){
    var name = document.getElementById("myText").value;
    alert(name);
    focusCircle.setName(name);
    focusCircle.showName();
  }
  if(focusCircle == null){
    alert("No circle is chosen to build onto. Please choose a focus circle");
  }
  
}

function reDisplayAll() {
  // clear canvas?? 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].changeColor("white"); 
    circleArray[i].showCircle();
    circleArray[i].showName();
  }

  console.log("reDisplay");
}
// this block checks whether the mouse is pressing a circle. 
// and if that circle has been clicked.
// and can make new circles.
window.onmousedown = function(e) {
  x = e.pageX - canvas.getBoundingClientRect().left
  y = e.pageY - canvas.getBoundingClientRect().top
  mouseY = y;
  mouseX = x; 
  console.log("ifNewCircleButtonPressed = " + ifNewCircleButtonPressed) ;
  console.log("focusCircle = ");
  this.console.log(focusCircle);
    //make new circle if button is pressed and and the focus circle is not null
    if(ifNewCircleButtonPressed && focusCircle != null){
      this.console.log("make new circle");
      // make a new circle
      //alert("MAKE NEW CIRCLE, new coordinates found (x,y) "+mouseX+","+mouseY);
      // add new circle to new location
      
      let newCircle = new Circle(ctx,"newCircle",mouseX,mouseY, 30 );
      console.log("newCircle"); 
      circleArray.push(newCircle);
      newCircle.showCircle();

      
      
      ifNewCircleButtonPressed = false; 
      // add line from focus circle center to new center
      ctx.beginPath();
      ctx.moveTo(focusCircle.x, focusCircle.y);
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();

      //focusCircle = null;

    }
    
    // check for focus circle. 
    if(ifNewCircleButtonPressed == false && focusCircle == null ){
      console.log("checking if circle is clicked not making new circles");
    //loop trough all circles and check if mouse is inside. 
    for (var i = 0; i < circleArray.length; i++) {
      
      //console.log(circleArray[i].x);
      x0 = circleArray[i].x;
      y0 = circleArray[i].y;
      distance = Math.sqrt((x-x0)*(x-x0) + (y-y0)*(y-y0));

      // if mouse is inside circle
      if (distance < circleArray[i].r) {
        console.log("clicked");
        circleArray[i].changeColor("green"); 
        circleArray[i].showCircle();

        // tell user to make new circle. 
        alert("make new circle, click where you want the center of the new circle");
        // set the focus circle to the circle that was clicked.
        focusCircle = circleArray[i]; 
        // jump out of loop
        break;
        
      }
    }
  }
  else console.log("ELSE no cirle made not searching for circles to click");
}





// ******************* APENNDIX EXTRA CODE
// *******************




/*
// show circles
for (var i = 0; i < circleArray.length; i++) {
  console.log("show circle");
  circleArray[i].showCircle();

}



// draw loop 


/*  ********* draw loop experimenet
var i = 0;
setInterval(onTimerTick, 100); // 33 milliseconds = ~ 30 frames per sec

function onTimerTick() {
  let newCircle = new Circle(ctx,"generalCircle",10*i,10*i, 30 );
  i= i+1; 
  circleArray.push(newCircle);
  
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].showCircle();
  }
  
  console.log(circleArray.length);





}

*/

//************************************************** */

/*

// create member (not used yet)
let member1 = new Member("john" );

// show circles
for (var i = 0; i < circleArray.length; i++) {
    console.log(circleArray[i]);
    circleArray[i].showCircle();

}
 


// check mouse x and y.
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  
  //console.log("X coords: " + x + ", Y coords: " + y);
}

// listen to were the mouse is:
window.onmousemove = function(e) {
  mouseX = e.pageX - canvas.getBoundingClientRect().left
  mouseY = e.pageY - canvas.getBoundingClientRect().top
  //console.log(this.mouseX + " , "+ mouseY);
}

// check if circle is clicked:
window.onmousedown = function(e) {
  x = e.pageX - canvas.getBoundingClientRect().left
  y = e.pageY - canvas.getBoundingClientRect().top

  //loop trough all circles and check if mouse is inside. 
  for (var i = 0; i < circleArray.length; i++) {
    
    //console.log(circleArray[i].x);
    x0 = circleArray[i].x;
    y0 = circleArray[i].y;
    distance = Math.sqrt((x-x0)*(x-x0) + (y-y0)*(y-y0));
    //console.log("here");

    if (distance < circleArray[i].r) {
      console.log("clicked");
      circleArray[i].changeColor("green"); 
      circleArray[i].showCircle();
      // now activate that circle so the members shows up. 
      // make line to a location close to circle. 
      
      circleArray.push(newCircle);
      console.log()
      break;
      
    }
  }
}
let newCircle = new Circle(ctx,"new",this.mouseX,this.mouseY, 30 );





/* APENDIX: code snippets
*****************************
nice to have in case. 
only put things here that works (everything must works) 
***************************** 

listen to keys. each key has a number

function checkKey(e) {
  e = e || window.event;
  alert(e.keyCode);
  // if key = n
  // make new circle where the pointer is
  if (e.keyCode=== 78){
    alert("make new circle");
  }
}
document.onkeydown = checkKey;

//*********************************** 

// make a bunch of circles or maybe not.. 

for (let i = 0; i < 20; i++) {
  let circle = new Circle(ctx,"newc",50*i,60*i, 60 );
  circleArray.push(circle);
  //console.log("newCircleMade");
}
*/
//************************************ 


