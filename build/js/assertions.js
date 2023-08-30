"use strict";
// Convert to more or less specific
let a = 'hello';
let b = a; // Less specific type
let c = a; // More specific
// Valid syntax too in typescript
let d = 'World'; // We cant do this with tsx file in react
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string // Not valid in ts
10; // Valid
// The DOM 
const img = document.getElementById('img');
// img.src // It will give error
const img2 = document.getElementById('img');
img2.src; // Totally fine
