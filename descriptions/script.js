// Proprety descriptors

const obj = {
    name: `John`,
    lastName: `Smith`,
    //_age: 23,
    colorSkin: `black`,
    size: {
        length: 23,
        width: 31,
        height: 65
    }
}



//console.log(`colorSkin` in obj);

// const obj2 = new Object();
// const obj3 = Object.create(null);

// console.log(Object.getOwnPropertyDescriptors(obj));

// Object.defineProperty(obj, `city`, {
//     value: `Boston`,
//     enumerable: true
// });
// Object.defineProperty(obj, `lastName`, {
//     writable: false,
//     configurable: false
// });

// Object.defineProperty(obj, `age`, {
//     get () {
//         return this._age;
//     },
//     set (val) {
//         if(val > 0 && val < 120) {
//             this._age = val;
//         }
//     },
//     enumerable: true
// });

// Object.defineProperty(obj, `_age`, {
//     enumerable: false
// });


//console.log(Object.getOwnPropertyDescriptors(obj));
//console.log(Object.keys(obj));
//console.log(obj.age);

// function objCreater () {
//     let _age = 0;
//     const obj = {};
//     Object.defineProperty(obj, `age`, {
//         get () {
//             return _age;
//         },
//         set (val) {
//             if(val > 0 && val < 120) {
//                 _age = val;
//             }
//         }
//     });

//     return obj;
// }

// const person = objCreater();
// person.age = 10;
// console.log(person.age);


// Object.preventExtensions() объекту запрещается расширяться
// Object.isExtensible()
// Object.freeze() объекту запрещается менять все
// Object.isFrozen()
// Object.seal() объекту запрещается удалять и расширяться
// Object.isSealed()
// Object.preventExtensions(obj);


const kurochka = {
    color: `red`,
    _isOtbivnaya: false
}


Object.defineProperty(kurochka, `isOtbivnaya`, {
        get () {
            return this._isOtbivnaya;
        },
        set (val) {
            if(val === true && Object.isExtensible(this)) {
                this._isOtbivnaya = val;
                Object.preventExtensions(this);
            }
        },
});

kurochka.city = `fdsa`;
kurochka.isOtbivnaya = true;
kurochka.isOtbivnaya = false;
kurochka.age = `fdsfdadagfsgfsda`;
console.log(kurochka);

// const obj = Object.create({a: 2});
// console.log(obj.hasOwnProperty(`a`));

