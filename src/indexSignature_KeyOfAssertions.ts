// Index Signatures
// Useful When we are creating the object and we dont know about the object keys but we know the shape of of the object and we can declare the type of the keys and the type of the values. 
// Typescipt requires the index signatures when we try to access the object properties dynamically

// This will allow any key in the object
// interface TransactionObj {
//     readonly [index: string] : number
// } 

// This will allow any other keys including Pizza , books and job
interface TransactionObj {
    readonly [index: string] : number
    Pizza : number,
    Books : number,
    Job : number
}


const todayTransactions : TransactionObj = {
    Pizza : -10,
    Books : -5,
    Job : 50
}

console.log(todayTransactions.Pizza);
console.log(todayTransactions['Pizza']);

let prop : string = 'Pizza'
console.log(todayTransactions[prop]);

const todaysNet = (transactions : TransactionObj): number =>{
    let total = 0;
    for(const transaction in transactions){
        total += transactions[transaction];
    }
    return total;
}

console.log(todaysNet(todayTransactions));

console.log(todayTransactions['Dave']);


// ==============================================================>

interface Student{
    // [key : string] : string | number | number[] | undefined
    name : string,
    GPA : number,
    classes ?: number[]
}

const student : Student = {
    name : "Doug",
    GPA : 3.5,
    classes : [100,200]
}

// console.log(student.test); // No problem when we create an index signature in an interface

// for(const key in student){
//     console.log(`${key} : ${student[key]}`) // If the object is not indexed then it will give error in ts
// }

// Accessing object properties using keyof
for(const key in student){
    console.log(`${key} : ${student[key as keyof Student]}`) // Key of creates a union type and union type is a specific string literal
}
// Another way to do the same thing and can also be used when we dont know the type of object
Object.keys(student).map(key =>{
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student : Student , key : keyof Student): void =>{
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student,'GPA');


// ============================================================>
// interface Incomes {
//     [key : string | number] : number
// }
// We can provide literal type using type but it will throw error in interface

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams,number>

const monthlyIncome : Incomes = {
    salary : 500,
    bonus : 100,
    sidehustle : 250
}

for(const revenue in monthlyIncome){
    console.log(monthlyIncome[revenue  as keyof Incomes])
}