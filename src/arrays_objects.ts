let stringArr = ['one','two','three'];
let guitars = ['Strat','Les Paul',30];
let mixedData = ['EVH',1984,true];

stringArr[0] = 'John';
stringArr.push('Dave');

guitars[0] = 1984;
guitars.unshift('Jim');

// stringArr = guitars; // Not allowed
guitars = stringArr; // Allowed

// guitars = mixedData; // Not allowed

let test = []; // Any type
let bands: string[] = [];
bands.push('Van Halen');

// Tuple
let myTuple : [string,number,boolean] = ['Manik',21,true]; // More strict than an array
let mixed = ['John',1,false];
mixed = myTuple; // Valid
// myTuple = mixed; // Not Valid



// Objects  =================================================>

let myObj : object;
myObj = [];
console.log(typeof(myObj));
myObj = bands; // Allowed
myObj = {};


const exampleObj = {
    prop1 : 'Dave',
    prop2 : true
}

// exampleObj.prop1 = true; // Not allowed
exampleObj.prop1 = 'John' // Allowes
// Type and interface are all the same thing
// type Guitarist = {
//     name : string,
//     active? : boolean, // Question mark is used to make the property optional
//     albums: (string | number)[]
// }

interface Guitarist {
    name? : string,
    active : boolean, // Question mark is used to make the property optional
    albums: (string | number)[]
}
// Making object of custom type i.e Guitarist
let evh: Guitarist = {
    name: 'Eddie',
    active : false,
    albums: [1984,5150,'OU812']
}

let jp: Guitarist = {
    active : true,
    albums: ['I','II','IV']
}

// evh.years = 40; // Not allowed
evh = jp;

const greetGuitarist = (guitarist : Guitarist) =>{
    // Narrowing
    if(guitarist.name) return `Hello ${guitarist.name.toUpperCase()}`
    return `Hello!`
}


console.log(greetGuitarist(jp));


// Enums 
// "Unlike most Typescript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade{
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);