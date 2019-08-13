interface Shape {
    Grow(): void;
}

class Triangle implements Shape {
    Grow() {

    }
}

class Circle implements Shape {
    Grow() {
    }
}

class Rectangle implements Shape {
    Grow() {
    }
}
let shapes: Shape[] = [new Triangle(), new Circle(), new Rectangle()];
for (let shape of shapes) {
    shape.Grow();
}


