//interface
interface chai{
    flavour: string,
    price: number,
    qnt?:number
}

const elementChai : chai = {
    flavour : "masala",
    price : 200
}

interface Username{
    readonly id: number,
    name: string
}

const user : Username ={
    id: 1,
    name: "parikishit"
}
// user.id = 9 --because of read only 
//definition
interface tea{
    (price: number):number
}
//usage
const tea1 : tea = (n) => n * 10

interface MyChai {
    start(): void;
    stop(): void
}

const program: MyChai = {
    start() {
        console.log("start");
        
    },
    stop() {
        console.log("stop");
        
    },
}

interface Rating {
    [product:string] : number
}

const productRating : Rating = {
    shirt : 4.5,
    t_shirt: 4
}

interface User{
    name: string
}
interface User{
    age: number
}

const username: User ={
    name: "",
    age:22
}

