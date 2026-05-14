//type assertion
let response:any = "20";

let numberLength : number = (response as string).length //forcefully convert into another data types

type Book = {
    name : string;
};

let bookString = '{"name": "who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;
let value : any 

value = "chai"
value = [1,2,3]
value = 2.5

value.toUpperCase()

let newValue : unknown

newValue = "chai"
newValue = [1,2,3]
newValue = 2.5

if (typeof newValue === "string") {
    newValue.toUpperCase()
}


try {
//type guard    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
        
    }
    console.log("Error", error);
    
}

const data: unknown = "chai aur code"
const strData: string = data as string

console.log(data);

//type is --is creating a TypeScript type, not a variable. its It only helps TypeScript during development.“These are the allowed shapes/types of data.”

type Role = "admin" | "user" | "superAdmin"

function roleBased(item:Role): void{
    if (item ==="admin") {
        console.log("Role provided to admin");
        return
    }
    if(item === "user"){
        console.log("Redirected based on User");
        return
    }
    item;
}

function neverReturn(): never{
    while(true){}
}