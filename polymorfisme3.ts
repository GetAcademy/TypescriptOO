class Shape {
    Grow(): void {
        console.log('grow step 1');
    }
}

class Triangle extends Shape {
}

var t = new Triangle();
t.Grow(); // skriver: grow step 1
console.log('-------------');


class Circle extends Shape {
    Grow() {
        console.log('grow step 2');
    }
}

var c = new Circle();
c.Grow();
console.log('-------------');

class Rectangle extends Shape {
    Grow() {
        super.Grow();
        console.log('grow step 3');
    }
}

var r = new Rectangle();
r.Grow();
console.log('-------------');



