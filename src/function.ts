function name(item: string , cups: number) {
    return `chai is :${item} number of cups is: ${cups}`
}

name("masala", 2)

function getChai(name: string, ): number{

    return 25

}

function sayHello(): void{
    console.log("inner");
    
}

function sayHii(name:string){
    if(!name) return null;
    return 25
}

// function orderChai(name?:string){
//     console.log("hii");
    
// }

function orderChai(type:string = "masala"){
    console.log("hii");
    
}