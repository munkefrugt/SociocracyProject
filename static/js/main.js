
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
let generalCircle = new Circle(ctx,"generalCircle",w/2,h/2, 30 );
let testCircle = new Circle(ctx,"testCircle",w/2+30,h/2+30, 30 );

circleArray.push(generalCircle);
circleArray.push(testCircle);

generalCircle.showCircle();
testCircle.showCircle();
console.log(circleArray.length);

// deafual no circle is selected or infocus
focusCircle = null; 

// this block checks whether the mouse is pressing a circle. 
// and if that circle has been clicked.
// and can make new circles.
window.onmousedown = function(e) {
  x = e.pageX - canvas.getBoundingClientRect().left
  y = e.pageY - canvas.getBoundingClientRect().top
  mouseY = y;
  mouseX = x; 
  console.log(focusCircle);
    // check if a circle is in focus or not-

    // A focus circle is selected
    if (focusCircle != null){
      alert("new coordinates found (x,y) "+mouseX+","+mouseY);
      // add new circle to new location
      
      let thirdCircle = new Circle(ctx,"thirdCircle",mouseX,mouseY, 30 );
      console.log("newCircle"); 
      circleArray.push(thirdCircle);
      thirdCircle.showCircle();
    }
    // no focus circle is found, check if mouse is inside one. 
    if(focusCircle == null){
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


