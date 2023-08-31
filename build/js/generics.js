"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg != null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(true));
console.log(isTrue(0));
;
console.log(isTrue('Dave'));
console.log(isTrue(1));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Dave' }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // Process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Manik" }));
// console.log(processUser({name : "Manik"})) // Not allowed as if is mandatory
const getUserProperty = (users, key) => {
    return users.map(user => user[key]);
};
// Generics in class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = 'Dave';
// store.state = 12 // Not allowed
const myState = new StateObject([15]);
myState.state = ['Dave', 12, true];
console.log(myState.state);
