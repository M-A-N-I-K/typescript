"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello , I'm ${this.age}`;
    }
}
const Manik = new Coder('Manik', 'LoFi', 21, 'Typescript');
console.log(Manik.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const newObj = new WebDev('Windows', 'NewObj', 'Rock', 23);
console.log(newObj.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Paige = new Guitarist("Jimmy Paige", "Guitar");
console.log(Paige.play("strums"));
// Class With static properties
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Dave = new Peeps('Dave');
const Naruto = new Peeps('Naruto');
console.log(Peeps.count);
console.log(Naruto.id);
console.log(John.id);
// Getters and setters in classes
class Bands {
    constructor() {
        this.dataState = [];
    }
    // Get is special keyword
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((ele) => typeof ele === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Young", "Led Zeperd"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// MyBands.data = 'Van Helen'; // Not Allowed
