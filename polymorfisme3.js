var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.Grow = function () {
        console.log('grow step 1');
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Triangle;
}(Shape));
var t = new Triangle();
t.Grow(); // skriver: grow step 1
console.log('-------------');
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.Grow = function () {
        console.log('grow step 2');
    };
    return Circle;
}(Shape));
var c = new Circle();
c.Grow();
console.log('-------------');
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.Grow = function () {
        console.log('grow step 3');
        _super.prototype.Grow.call(this);
    };
    return Rectangle;
}(Shape));
var r = new Rectangle();
r.Grow();
console.log('-------------');
