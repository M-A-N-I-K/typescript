// Type assertions and Type Casting
type One = string;
type Two = string | number;
type Three = 'hello';

// Convert to more or less specific
let a : One = 'hello';
let b = a as Two; // Less specific type
let c = a as Three // More specific

// Valid syntax too in typescript
let d = <One>'World'; // We cant do this with tsx file in react
let e = <string | number>'World';

const addOrConcat = (a : number,b : number , c : 'add' | 'concat') : number | string => {
    if(c === 'add') return a + b;
    return "" +  a + b;
}

let myVal: string = addOrConcat(2,2,'concat') as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2,2,'concat') as number;

// 10 as string // Not valid in ts
(10 as unknown) as string // Valid

// The DOM 
const img = document.getElementById('img');
// img.src // It will give error
const img2 = document.getElementById('img') as HTMLImageElement;
img2.src // Totally fine