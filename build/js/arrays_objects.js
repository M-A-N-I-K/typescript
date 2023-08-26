"use strict";
let stringArr = ['one', 'two', 'three'];
let guitars = ['Strat', 'Les Paul', 30];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('Dave');
guitars[0] = 1984;
guitars.unshift('Jim');
// stringArr = guitars; // Not allowed
guitars = stringArr; // Allowed
// guitars = mixedData; // Not allowed
let test = []; // Any type
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Manik', 21, true]; // More strict than an array
let mixed = ['John', 1, false];
mixed = myTuple; // Valid
// myTuple = mixed; // Not Valid
// Objects  =================================================>
let myObj;
myObj = [];
console.log(typeof (myObj));
myObj = bands; // Allowed
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
// exampleObj.prop1 = true; // Not allowed
exampleObj.prop1 = 'John'; // Allowes
// Making object of custom type i.e Guitarist
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    active: true,
    albums: ['I', 'II', 'IV']
};
// evh.years = 40; // Not allowed
evh = jp;
const greetGuitarist = (guitarist) => {
    // Narrowing
    if (guitarist.name)
        return `Hello ${guitarist.name.toUpperCase()}`;
    return `Hello!`;
};
console.log(greetGuitarist(jp));
// Enums 
// "Unlike most Typescript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
