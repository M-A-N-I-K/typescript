"use strict";
// Index Signatures
// Useful When we are creating the object and we dont know about the object keys but we know the shape of of the object and we can declare the type of the keys and the type of the values. 
// Typescipt requires the index signatures when we try to access the object properties dynamically
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todayTransactions.Pizza);
console.log(todayTransactions['Pizza']);
let prop = 'Pizza';
console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
console.log(todayTransactions['Dave']);
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test); // No problem when we create an index signature in an interface
// for(const key in student){
//     console.log(`${key} : ${student[key]}`) // If the object is not indexed then it will give error in ts
// }
// Accessing object properties using keyof
for (const key in student) {
    console.log(`${key} : ${student[key]}`); // Key of creates a union type and union type is a specific string literal
}
// Another way to do the same thing and can also be used when we dont know the type of object
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
