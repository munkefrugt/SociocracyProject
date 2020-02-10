
// clear the cache by Ctrl + F5 , run in incognito mode. 

// start the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var w = canvas.width;
var h = canvas.height;
console.log("test");
/*var circle = {
  x: w / 2,
  y: h / 2,
  r: 30,
}*/
// make the first circle  general circle

let generalCircle = new Circle(ctx,"generalCircle",w/2,h/2, 30 );
let secondC = new Circle(ctx,"newc",100,100, 30 );


// create member
let member1 = new Member("john" );

// show the circle
var circleArray = [];
var membersArray = [];

// make a bunch of circles
for (let i = 0; i < 20; i++) {
  let circle = new Circle(ctx,"newc",50*i,60*i, 60 );
  circleArray.push(circle);
  console.log("newCircleMade");
}

circleArray.push(generalCircle);
circleArray.push(secondC);

membersArray.push(member1);
member1.somefunc();

// show circles
for (var i = 0; i < circleArray.length; i++) {
    console.log(circleArray[i]);
    circleArray[i].showCircle();

}


// test making many objs: 
//https://stackoverflow.com/questions/14177573/creating-new-object-instances-in-a-loop
/*var objs = new Array();

      for(var i = 0; i < len; i++) {
        objs[i] = new fooBar(arr[i]);
      }

      alert(objs[0].value); 

*/

// check for keys. each key has a number
// works not used yet!
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

// check mouse x and y.
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  
  console.log("X coords: " + x + ", Y coords: " + y);
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
      circleArray[i].makeline();

     /* circleArray
      cirle[0] = new Circle(ctx,"zero",400,400, 30 );
      cirle[0].showCircle();*/

       


    }
    
  }
  
}







