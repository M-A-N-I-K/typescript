// Utility Types

// Partial :
interface Assignment{
    studentId : string,
    title : string,
    grade : number,
    verified ?: boolean
}

const updateAssignment = (assign : Assignment, propsToUpdate : Partial<Assignment>) : Assignment =>{
    return {...assign,...propsToUpdate};
}

const assign1 : Assignment = {
    studentId : "compsci123",
    title : "Final Project",
    grade : 0,
}

console.log(updateAssignment(assign1,{grade : 95}));
const assignGraded : Assignment = updateAssignment(assign1,{grade : 95});


// Required and Readonly

const recordedAssignment = (assign : Required<Assignment>) : Assignment =>{
    return assign;
}

const assignVerified : Readonly<Assignment> = { ...assignGraded , verified : true }

recordedAssignment({...assignGraded,verified : true});

// Record
const hexColorMap: Record<string,string> = {
    red : "FF0000",
    green : "00FF00",
    blue : "0000FF"
}

type students = "Sara" | "Kelly"
type  LetterGrades = "A" | "B" |"C" | "D" | "E"

const finalGrades : Record<students,LetterGrades> = {
    Sara : "B",
    Kelly : "E"
}

interface Grades{
    assign1 : number,
    assign2 : number
}

const gradeData : Record<students,Grades> = {
    Sara : {assign1: 85, assign2 : 93},
    Kelly : {assign1 : 99 , assign2 : 98}
}

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score : AssignResult = {
    studentId: "K123",
    grade : 84
}

type AssignPreview = Omit<Assignment , "grade" | "verified">
const preview : AssignPreview = {
    studentId : "K123",
    title : "Minor project"
}

// Exculde and Extract

type adjustedGrade = Exclude<LetterGrades,"E">

type highGrades = Extract<LetterGrades,"A" | "B">

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type newAssign = {title : string , points : number}

const createNewAssign = (title : string , points : number) => {
    return {title , points}
}

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign : newAssign = createNewAssign("Utility Types",100)
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs : AssignParams = ["Generics" , 100]

const tsAssign2 : newAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - Helps us with the ReturnType of a promise
