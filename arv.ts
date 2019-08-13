class A {
    private name: string;
    public static value: number;

    constructor(name: string) {
        this.name = name;
    }
    speak(): void {
        console.log('Hei, ' + this.name + '! Verdien er ' + A.value);
    }
}

class B extends A { // B arver fra A - B er subklassen til A - A er superklassen til B
}

A.value = 7;
var a1 = new A('Per');
a1.speak();
A.value = 8;
var a2 = new A('Pål');
a2.speak();
a1.speak();


