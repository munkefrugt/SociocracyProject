class PersonCircle {
    constructor() {
        this.x;
        this.y;
        // w and h
        this.diameter;
    }

    display() {
        ellipse(this.x, this.y, this.diameter)
    }
}