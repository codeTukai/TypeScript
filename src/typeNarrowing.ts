function narrow(kind:string | number){
    if (kind === 'string') {
        return `Hello user ${kind}`
    }

    return `Hii developer ${kind}`
}

//truthy 
function chai(msg?:string){
    if (msg) {
        return `chai is served ${msg}`
    }
    return `default chai is served`

}

function orderChai(chai:"small" | "medium" | "large" | number){
    if (chai === "small") {
        return `small chai is get ${chai}`
    }
    if (chai === "large" || chai === "medium") {
        return `extra chai is got it ${chai}`
    }
    return `chai order ${chai}`
}

class Chai1{
    serve(){
        return `Chai1 is called`
    }
}
class Chai2{
    serve(){
        return `Chai2 is called`
    }
}

function serve(chai: Chai1 | Chai2){
    if (chai instanceof Chai1) {
        return chai.serve()
    }
}
//declare a custom type
type chaiOrder = {
    type: string
    sugar: number
}

//check the typeof all are right or not
function isChaiOrder(obj:any): obj is chaiOrder{
    return(
        typeof obj === "object" && obj !== null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:chaiOrder | string){
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}`
    }

    return `Serving custom chai: ${item}`
}

//first type is a keyword and second one is a value/property
type MasalaChai = {type:"masala"; spicelevel: number};
type adrakhChai = {type:"adrakh"; amount: number};
type cuttingChai = {type:"cutting"; aroma: number};

type Chai = MasalaChai | adrakhChai | cuttingChai

function makeChai(order: Chai){
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        case "adrakh":
            return `Adrakh chai`
            break;
        case "cutting":
            return `Cutting chai`
            break;
    
        
    }
}

