    class Person {
        constructor(name,personId) {
            // make vectors:
            //this.VcenterOfGroupCircle = createVector(x, y);


            //this.centerOfPersonCircle = createVector(x, y);

            // do not change the Id in persons! 
            this.personId = personId; 
            this.name = name;
            this.textY = personId * 20 + 19; 
            this.radius = 10; 
            print("new person  " + name);

            // elipse
            this.x = windowWidth -250;
            this.y = personId * 20 + 19; 
            this.c = color(255, 255, 255);

            this.isFocusPerson= false; 
            // a person can have multiple roles
            this.roles = []; 
        }

        display() {
            // let num = i;
            // make calculation. for postion. 
            textAlign(LEFT);
            // +(num *10)
            let y = 19 + (this.personId *20);
            //print(this.personId); 
            //print("person y  " +y); 
            fill(0);
            noStroke()
            text("person : " + this.name , windowWidth -200, this.textY);
            //print(this.y);
            //fill(255); 
            stroke(0);
            strokeWeight(2);
            fill(this.c);
            ellipse(this.x, this.y, this.radius*2);
        }

        // is mouse inside? 
        isMouseInPerson(px,py){
            //print("isMouseInPerson? ");
            let d = dist(px,py,this.x,this.y);
            if(d < this.radius){
            // print("yes");
            

            return true; 
            }
            else{
            return false;
            }
        }

    }