"use strict";
// interface userid = stringOrNumber // Not Allowed
// Literal types
let Name = 'Dave';
let userName;
userName = 'Any';
// Functions 
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
const subtract = function (c, d) {
    return c - d;
};
const multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// Optional parameters 
// Making c optional here
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined')
        return a + b + c;
    return a + b;
};
// Giving default value to c
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3));
logMsg(addAll(2, 3, 4));
logMsg(sumAll(2, 3));
logMsg(sumAll(2, 3, 4));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
// Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// This is never type too if if statement is removed
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// Use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
