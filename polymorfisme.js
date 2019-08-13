var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.Grow = function () {
    };
    return Triangle;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.Grow = function () {
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.Grow = function () {
    };
    return Rectangle;
}());
var shapes = [new Triangle(), new Circle(), new Rectangle()];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    shape.Grow();
}
