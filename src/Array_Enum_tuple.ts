const hero : string[] = ["ironman", "superman"]

const number: number[] = [30,40,20]

const customArray : Array<string | number> = [89,"hii"] //custom array

type chai = {
    name: string,
    price: number
}

const masalaChai:chai[] = [
    {name: "superChai", price:40},
    {name: "superCoffee", price:90}
]

//read only array 

const cities: readonly string[] = ["kolkata", "calcutta"]

// cities.push("mumbai")

const table: number[][] = [
    [1,2,3]
]

//Tuple

let Tuple : [string,number]; // de -structure
Tuple = ["uu", 9]

const optional : [string, number, boolean?] = ["hii",8] //if use const instead of let then assign the value immediately 
let optional1 : [string, number, boolean?]

optional1 = ["Yellow", 90]

const readOnlyTuple: readonly [string, number] = ["Hii Tukai", 100]

//named tuple

const named : [type:string, price: number] = ["masala", 50]

// enum --restricted the choice

enum cupSize{
        small,
        medium,
        large

}

const size = cupSize.large

enum status{
    pending = 100,
    success,
    cancelled
}

enum CHAI{
    MASALA ="masala",
    GINGER = "ginger"
}

function makeChai(type: CHAI){
    console.log(`making chai ${type}`);
    
}

makeChai(CHAI.GINGER)
// makeChai("mm")

enum random {
    ID = 1,
    NAME = "chai"
}

const enum us {
    residency = "uk",
    residency1 = "in"

    
}

const res = us.residency

let t: [string,number] = ["chai", 1]
const t1: [string,number] = ["chai", 1]
t.push("too")
t1.push("too")