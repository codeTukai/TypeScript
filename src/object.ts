const chai = {
    name: "masala chai",
    price: 20,
    isHot : true
}

//infer
// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

//declare

let tea : {
    name: string;
    price: number;
    isHot: boolean
}

//use
tea = {
    name: "vii",
    price: 20,
    isHot: true
}

//alias object
//define the data
type Tea = {
    name: string;
    price: number;
    ingredients: string[] //array of string
}

const preparedChai: Tea = {
    name : "masala chai",
    price : 34,
    ingredients: ["chai", "coffee"]
}

//define 
//duck type
type Cup = {
    size: string
};

let smallCup: Cup = {
    size : "200ml"
}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup

type sampleCoffee = {
    qnt : number
}

const firstCoffeeSample = {
    qnt : 4,
    region: "uk"
}
const secondCoffeeSample:sampleCoffee = firstCoffeeSample

type User = {
    username: string;
    password: string
}

let getUser : User = {
    username: "jack",
    password: "uk12"
}

type Item = {name: string; count: number};
type address = {street: string; pin: number };

type user = {
    id:string;
    items: Item
    add: address 
}

type coffee = {
    name: string;
    price: number;
    isAvailable: boolean
}

const updateCoffee = (updates: Partial<coffee>)=>{
    console.log("updating chai", updates);
    
}

updateCoffee({price: 40})
updateCoffee({isAvailable: true} )

type chaiOrder = {
    name?: string;
    quantity?: number
}

const takeChai = (order: Required<chaiOrder>)=>{
    console.log(order);
    
}
takeChai({
    name : "masala chai",
    quantity : 3
})

type hello = {
    name: string;
    price : number;
    quantity: number;
    ingredients: string[]
}

type basicInfo = Pick<hello, "name" | "price" >;

const bio : basicInfo = {
    name : "hello",
    price: 23440
}

type hi = {
    name: string;
    price : number;
    quantity: number;
    secretIngredients: string[];
}

//hiding value / remove value


type hide = Omit<hi, "secretIngredients">;