abstract class Shape {
    abstract Grow(): void;
    Move(): void {
        // flytter alle punktene til høyre
    }
}

class Triangle extends Shape {
    Grow() {
    }
}

class Circle extends Shape {
    Grow() {
    }
}

class Rectangle extends Shape {
    Grow() {
    }
}



