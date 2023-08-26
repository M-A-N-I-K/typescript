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

let postId : number | string;
let isActive : number | boolean;

let re : RegExp = /w\+/g;