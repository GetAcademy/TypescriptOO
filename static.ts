class A {
    private name: string;
    public static value: number;

    constructor(name: string) {
        this.name = name;
    }
    speak(): void {
        console.log('Hei, ' + this.name + '! Verdien er ' + A.value);
    }

    static showValue() {
        console.log(A.value);
    }
}

class B extends A { // B arver fra A - B er subklassen til A - A er superklassen til B
}
A.value = 5;
A.showValue();
var a = new A('Ole');
a.showValue();

