class Zero {
    constructor(x, y, d = 10) {
        this.x = x;
        this.y = y;
        this.X = Number(((this.x - 200) / 100).toFixed(2));
        this.Y = Number(((200 - this.y) / 100).toFixed(2));
        this.d = d;
        this.Conj = false;
        this.hasConj = false;
        this.dragging = false;
        this.Yconj = this.y + 2 * ((height / 2) - this.y);
    }
    show(c = '#ff0') {
        // change color when mouse is on the object:
        if (this.inRange() && this.d == 10) { c = '#00f'; }
        // points inside the square:
        if (this.dragging) {
            if (mouseX > width) {
                this.x = width;
            }
            else if (mouseX < 0) {
                this.x = 0;
            } else {
                this.x = mouseX;
            }
            if (mouseY > height) {
                this.y = height;
            }
            else if (mouseY < 0) {
                this.y = 0;
            } else {
                this.y = mouseY;
                this.Yconj = this.y + 2 * ((height / 2) - this.y);
            }
            if (this.Conj) {
                this.y = this.Yconj;
            }
        }
        this.X = Number(((this.x - 200) / 100).toFixed(2));
        this.Y = Number(((200 - this.y) / 100).toFixed(2));

        //        // points inside the main circle only:-
        //        if(this.dragging && dist(mouseX,mouseY,width / 2, height / 2)<=200){
        //              this.x = mouseX;
        //              this.y = mouseY;
        //           }
        //        else if(this.dragging) {
        //            let angle = Math.atan((mouseY - height / 2) / (mouseX - width / 2));// angle of rotation
        //            let R = Math.sign(mouseX - width / 2) * 200;                        //sign (left part or right part) * radius 
        //            this.x = width/2 + R*Math.cos(angle); 
        //            this.y = height/2 + R*Math.sin(angle);
        //        }

        stroke(c);
        strokeWeight(2);
        noFill();
        if (this.d == 10) { fill(c); }

        circle(this.x, this.y, this.d);
    }
    inRange() {
        if (dist(mouseX, mouseY, this.x, this.y) <= this.d / 2) {
            return true;
        } else if ((this.Conj || this.hasConj) && dist(mouseX, mouseY, this.x, this.Yconj) <= this.d / 2) {
            return true;
        } else {
            return false;
        }
    }
    Drag() {
        // Did I click on the circle?
        if (this.inRange()) {
            this.dragging = true;
        }
    }
    release() {
        // Quit dragging
        this.dragging = false;
    }
}