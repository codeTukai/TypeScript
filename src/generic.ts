//generic-- general-- no limit for data type

function genericValue<T>(item: T): T[]{
    return [item]
}

genericValue("hello")
genericValue(42)
genericValue({})

function array<A, B>(a: A, b: B): [A, B] {
    return [a,b]
}

array("hii", 9)
array("masala",{fav:""})

interface Box<T>{
content: T
}

const countBox: Box<number> ={
content:10
}
const countBox2: Box<string> ={
content:"hey"
}

interface Promise<T>{
    status: number,
    data: T
}

const res: Promise<{fav: string}> ={
    status: 201,
    data: {fav: "success"}
}