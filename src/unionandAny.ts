//union
let sums: number | string = '1M'

sums = 'number'
sums = 'string'

let apiResponseSts: 'pending' | 'success' | 'error' ='error'

apiResponseSts = 'success'

//Any / undefined
const orders = ["10", "12", "16", "18", "20"]

let currentOrder;

for (const order of orders) {
    if (order === '12') {
        currentOrder = order
    }
    currentOrder = "11"
}

console.log(currentOrder);
