class Coder {
    constructor(
        public readonly name : string,
        public music : string , 
        private age : number , 
        protected lang : string = 'Typescript'
    ){
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello , I'm ${this.age}`
    }
}

const Manik = new Coder('Manik','LoFi',21,'Typescript');
console.log(Manik.getAge());

class WebDev extends Coder {
    constructor(
        public computer : string,
        name : string,
        music : string , 
        age : number , 
    ){
        super(name,music,age);
        this.computer = computer;
    }

    public getLang (){
        return `I write ${this.lang}`
    }
}

const newObj = new WebDev('Windows','NewObj','Rock',23);
console.log(newObj.getLang());


// Implementing interface to a class :
interface Musician{
    name : string,
    instrument : string,
    play(action : string) : string
}

class Guitarist implements Musician{
    name : string
    instrument : string

    constructor(
        name : string, 
        instrument : string 
    ){
        this.name = name;
        this.instrument = instrument;
    }

    play(action : string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Paige = new Guitarist("Jimmy Paige","Guitar");
console.log(Paige.play("strums"));

// Class With static properties

class Peeps{
    static count : number = 0;
    static getCount() : number{
        return Peeps.count;
    }
    public id : number;
    constructor(public name : string){
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const John = new Peeps('John');
const Dave = new Peeps('Dave');
const Naruto = new Peeps('Naruto');

console.log(Peeps.count);
console.log(Naruto.id);
console.log(John.id);

// Getters and setters in classes

class Bands {
    private dataState : string[];

    constructor(){
        this.dataState = [];
    }
    // Get is special keyword
    public get data() : string[]{
        return this.dataState;
    }

    public set data(value : string[]){
        if(Array.isArray(value) && value.every((ele) => typeof ele === 'string')){
            this.dataState = value;
            return;
        }else throw new Error("Param is not an array of strings");
    }
}

const MyBands = new Bands();
MyBands.data = ["Young","Led Zeperd"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data,'ZZ Top'];
console.log(MyBands.data);
// MyBands.data = 'Van Helen'; // Not Allowed
