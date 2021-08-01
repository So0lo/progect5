// function Person (name = `John`, age = 23) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.run = function () {
//     console.log(`${this.name} is running`)
// };

// function Programmer (tech, experienceYears, ...rest) {
//     Person.call(this, ...rest);
//     this.tech = tech;
//     this.experienceYears = experienceYears;
// }

// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.constructor = Programmer;
// Programmer.prototype.code = function () {
//     console.log(`${this.name} writes code`);
// }
// const pr1 = new Programmer(
//     [`Html1`, `Css1`, `Js1`], 
//     4, 
//     `David`, 
//     23
// );

// const p1 = new Person(`J`, 23);
// const p2 = new Person(`D`, 34);
// const p3 = new Person(`Peter`, 41);

// console.log(p1 instanceof Person);
// console.log(Person.prototype.isPrototypeOf(p2));
//console.log(p1.__proto__ === Person.prototype);

//console.log(pr1);
//pr1.code();


// Tester.prototype = Object.create(Person.prototype);
// Tester.prototype.constructor = Tester;
// Tester.prototype.doNothing = function () {
//     return `${this.name} does nothing`;
// };

// function Tester (iq = 0, ...rest) {
//     Person.call(this, ...rest);
//     this.iq = iq;
// }

// const test = new Tester (100, `Michael`, 20);
// console.log(test);
// console.log(test.doNothing());
// test.run();


// // 1

// function Programmer (name, age, tech) {
//     this.name = name;
//     this.age = age;
//     this.tech = tech;
// }

// const prs = [
//     new Programmer (`pr1`, 25, [`html`, `css`, `js`, `python`]),
//     new Programmer (`pr2`, 31, [`html`, `css`, `js`]),
//     new Programmer (`pr3`, 28, [`html`, `css`, `js`]),
//     new Programmer (`pr4`, 22, [`html`, `css`, `js`, `python`]),
//     new Programmer (`pr5`, 35, [`html`, `css`, `js`, `python`]),
//     new Programmer (`pr6`, 45, [`html`, `css`, `js`, `python`]),
//     new Programmer (`pr7`, 25, [`html`, `css`, `js`, `python`]),
//     new Programmer (`pr8`, 34, [`html`, `css`, `js`, `python`]),
//     new Programmer (`pr9`, 33, [`html`, `css`, `js`, `python`]),
//     new Programmer (`pr10`, 32, [`html`, `css`, `js`, `python`])
// ];

// const prsCopy = prs.filter(({age, tech}) =>
//  age > 30 && tech.length > 3);

// console.log(prsCopy);


// // 2

class Device {
    constructor () {
        this.isSwitchedOn = false;
    }

    switch () {
        this.isSwitchedOn = !this.isSwitchedOn;
    }
}

class SmartPhone extends Device {
    constructor (model = `nokia`, price = 100) {
        super();
        this.model= model;
        this.price= price;
     
    }

    callSmbd (string) {
        if (this.#battery < 90) {
            this.isSwitchedOn = false;
        }
        if (this.isSwitchedOn) {
            console.log(`you are calling ${string}`);
            this.#battery -= 10;
        } else {
            console.log(`your device is switched off, you cant call anyone`);
        }

    }

    #battery = 100;
    test2 = 23;

    static sale (sm) {
        sm.price = sm.price <= 0 ? 0 : sm.price - 10;
    }

    static charge (sm) {
        setTimeout(() => {
            sm.#battery = 100;
            console.log(`Батарея заряжена`);
        }, 2000);
    }
}

const dev = new Device ();
const smph = new SmartPhone(`nokia`, 100);
smph.callSmbd(`11`);
smph.switch();
smph.callSmbd(`22`);
smph.callSmbd(`33`);
smph.callSmbd(`44`);
SmartPhone.charge(smph);
console.log(smph);
setTimeout(() => {
    console.log(smph);
    smph.switch();
    smph.callSmbd(`44`);
}, 3000);
//SmartPhone.sale(smph);
//console.dir(SmartPhone);



class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    walk () {
        console.log(`${this.name} walks`);
    }
}

class Programmer extends Person {
    constructor (exYears, ...params) {
        super(...params);
        this.exYears = exYears;
    }
    // test () {
    //     super.walk();
    // }
    code () {
        console.log(`${this. name} writes code`);
    }

    walk () {
        console.log(`Programmer style!`);
        super.walk();
    }

}

const p1 = new Person (`Peter`, 23);
const pr1 = new Programmer (2, `Peter`, 24);

// console.log(p1);
// pr1.walk();



console.log(pr1);


