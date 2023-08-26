// Creating Type aliases for typescript types : 
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

interface Guitarist {
    name? : string,
    active : boolean, 
    albums: stringOrNumberArray // This will work fine too
}
// We can't do this with interface
type userId = stringOrNumber; // This works too

// interface userid = stringOrNumber // Not Allowed

// Literal types
let Name = 'Dave';

let userName : 'Dave' | 'John' | 'Any';
userName = 'Any';

// Functions 
const add = (a : number,b : number): number =>{
    return a + b;
}

const logMsg = (message : any): void =>{
    console.log(message);
}

logMsg('Hello!');
logMsg(add(2,3));

const subtract = function (c : number,d : number): number{
    return c - d;
}
// Using alias for functions who take two numbers
// type mathFunction = (a: number,b: number) => number;
// This is same like a type used above
interface mathFunction {
    (a: number,b: number) : number
}

const multiply : mathFunction = function(c,d){
    return c * d;
}
logMsg(multiply(2,2));


// Optional parameters 

// Making c optional here
const addAll = (a : number , b: number,c?: number): number =>{
    if(typeof c !== 'undefined') return a + b + c;
    return a + b;
}

// Giving default value to c
const sumAll = (a : number , b: number,c: number = 2): number =>{
    return a + b + c;
}
logMsg(addAll(2,3));
logMsg(addAll(2,3,4));
logMsg(sumAll(2,3));
logMsg(sumAll(2,3,4));


// Rest Parameters
const total = (...nums: number[]): number =>{
    return nums.reduce((prev,curr) => prev + curr);
}

logMsg(total(1,2,3,4));

// Never type
const createError = (errMsg : string) =>{
    throw new Error(errMsg);
}
// This is never type too if if statement is removed
const infinite = () =>{
    let i : number = 1;
    while(true){
        i++;
        if(i > 100) break;
    }
}
// Custom type guard
const isNumber = (value : any) : boolean =>{
    return typeof value === 'number' ? true : false;
}

// Use of the never type
const numberOrString = (value: number | string): string =>{
    if(typeof value === 'string') return 'string';
    if(isNumber(value)) return 'number';
    return createError('This should never happen!');
}