`use strict`;

// let person = {
//     name: `J`,
//     age: 23,
//     isPr: true,
//     tech: [`Html`, `Css`, `Js`]
//     //beg: run
// };

// let person2 = {
//     name: `D`,
//     age: 34,
//     isPr: false,
//     tech: [`Dig`, `Build`, `Run`]
//     //beg: run
// }

// let person3 = {
    //     name: `Peter`,
    //     age: 41,
    //     isProgrammer: false,
    //     tech: [`Html1`, `Css1`, `Js1`]
    // };
    
    // let person4 = {
    //     name: `Gregory`,
    //     age: 54,
    //     isProgrammer: true,
    //     tech: [`Dig1`, `Build1`, `Run1`]
    //     // speak () {
    //     //     console.log(`${this.name} speaks to you!`);
    //     // }
    // }
    
    // const persons = [person, person2, person3, person4];

// function run () {
//     return 1;
// }
// func.func = function func () {
//     console.dir(func);
// }
// func.func();
// call apply bind
// function func (a, b) {
//     return a+b;
// }
// function run (bar, num) {
//     console.log(this.name + ` runs` + bar + num);
// }
// // run.call(person, `bar`, 200);
// // run.apply(person2, [`bar`, 200]);
// const runLink = run.bind(person, `bar`, 100);
// //runLink(`bar`, 200);
// runLink();



// 

// function chekIsProgrammer (pr) {
//     return pr.isProgrammer;
// }
// const isAllProgrammers = persons.every(chekIsProgrammer);
// const isAnyProgrammers = persons.some(chekIsProgrammer);
// console.log(isAllProgrammers);
// console.log(isAnyProgrammers);

// setTimeout
// setInterval

//setTimeout(person4.speak.bind(person4), 2000);
//clearTimeout(launchid);

// let counter = 0;
// const intervalId = setInterval(function () {
//     console.log(`hello ${++counter}`);
// }, 1000);


// setTimeout(function () {
//     clearInterval(intervalId);
// }, 5000)





// // Задание

// let person = {
//     name: `John`,
//     age: 23,
//     isProgrammer: false,
//     becomeAprogrammer: becomeAprogrammer,
//     beOlder: beOlder,
//     becomeMister: becomeMister
// };

// function becomeAprogrammer () {
//     this.isProgrammer = this.isProgrammer || true;
// }

// function beOlder () {
//     this.age++;
// }

// function becomeMister () {
//     let name = this.name.split(`.`);
//     if (name[0] !== `Mr`) {
//         name.unshift(`Mr`);
//     }
//     this.name = name.join(`.`);
// }

// person.becomeAprogrammer();
// console.log(person);
// person.becomeAprogrammer();
// console.log(person);

// person.beOlder();
// console.log(person);
// person.beOlder();
// console.log(person);

// person.becomeMister();
// console.log(person);
// person.becomeMister();
// console.log(person);



// Задания 2


// 1

// const arr = [
//     {a:2, b:1},
//     {a:5, b:12},
//     {a:95, b:7}
// ];

// const valid = arr.every(({a, b}) => a > b);

// valid ? `its valid` : `its invalid`;


// // 2


// const arr = [
//     {a:2, b:1},
//     {a:5, b:12},
//     {a:95, b:7}
// ];

// const result = arr.map(({a,b}) => ({a, b: b**2}));

// console.log(result);


// // 3

// const arr = [
//     {a:2, b:1},
//     {a:5, b:12},
//     {a:95, b:7}
// ];

// const arr1 = arr.reduce((acc, {a, b}) => [...acc, a, b], []);
// console.log(arr1);

// // 4


// const getCounter = () => {
//     let time = 0;
//     return () => {
//         time += 1000;
//         return time;
//     }
// }

// const nextTime = getCounter();
// persons.forEach((pr) => {
//     pr.tech.forEach((techName) => {
//         setTimeout(() => {
//             console.log(`${pr.name} can ${techName}`);
//         }, nextTime());
//     })
// })



// let person5 = {
//     name: `J`,
//     age: 23,
//     spec: {
//         size: {
//             height: 41
//         }
//     }
// };
// const { spec: { size: { height } } } = person5;
// func(123, person5);
// function func (a, { spec: { size: { height } } }) {
//     console.log(height);
//     console.log(a);
// }

// const test = 2;
// const personTest = {
//     name: `D`,
//     test     // test: test
// }

// const fieldName = `isProgrammer`;
// const personTest = {
//     name: `D`,
//     [fieldName]: false
// };
// console.log(personTest);
// console.log(fieldName);


// for in

let person = {
    name: `J`,
    age: 23,
    isPr: true,
    tech: [`Html`, `Css`, `Js`]
};
// const arr = [2,3,11,34];
// for (let i = 0; i < Object.keys(person).length; i++) {
//     console.log(person[Object.keys(person)[i]]);
// }
// for (let key in person) {
//     console.log(person[key]);
// }
// for (let item of arr) {
//     console.log(item);
// }


// const mySet = new Set([2,32,4,1,3,2,5]);
// for (let item of mySet) {
//     console.log(item);
// }

const myMap = new Map([
    [2,32],
    [4,1],
    [3,2]
]);

myMap.set(person, [2,3])

console.log(myMap.get(person));
// for (let item of myMap.values()) {
//     console.log(item);
// }

// myMap.forEach((key, value, map) => {});
// myMap.forEach((value, value, set) => {});

// const personMap = new Map(Object.entries(person));
// const drug = Object.fromEntries(personMap);
// const drug2 = Object.fromEntries([
//     [`a`, 2],
//     [`test`, `tes`]
// ]);
// console.log(drug2);
