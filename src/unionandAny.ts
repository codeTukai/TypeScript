//union
let sums: number | string = '1M'

sums = 'number'
sums = 10

let apiResponseSts: 'pending' | 'success' | 'error' ='error'

apiResponseSts = 'success'
let airLine: 'aisle'| 'window' | 'error' = 'aisle'
//Any / undefined
const orders = ["10", "12", "16", "18", "20"]

let currentOrder: string | undefined;

//avoid any

for (let order of orders) {
    if (order === '12') {
        currentOrder = order
        break
    }
    currentOrder = "11"
}



console.log(currentOrder);