let myName: string;
let meaningOfLife: number;
let isLoading : boolean;
let album: string | number; // Union type
myName = 'Manik';
meaningOfLife = 20;
isLoading = true;
album = "Any type";

// Functions : 
const sum = (a: number , b: string) =>{
    return a + b;
}
console.log(sum(meaningOfLife,myName));