type chaiOrder =  {
    type: string; 
    sugar:number; 
    strong: boolean}

function makeChai(order: chaiOrder){
    console.log(order);
    
}

function serveChai(order: chaiOrder){
    console.log(order);
    
}

type chai = {
    source: string;
    sugar: number
}

class PrepareChai implements chai{
    source = "uk";
    sugar = 1000;
}

interface teaSize {

   size: "small" | "large"
} 

class Tea implements teaSize{
    size: "small" | "large" = "large";
}

type teaTest = "sweet" | "medium sugar" | "best"

function test(t: teaTest){
    console.log(t);
    
    
}

// test("sweet")

type basic = {teaLeaves: number}
type basic1 = {masala: number}

type finalChai = basic  & basic1

const tea1 : finalChai = {
    teaLeaves : 1,
    masala: 2
}

type User = {
    username : string
    email?: string
}

const u1: User = {
    username : "world",
    // email: "oo"
}

type Config = {
    readonly appName: string
    version : number
}

const c: Config = {
    appName : "Masterji",
    version: 1
}

// c.appName = "chai"