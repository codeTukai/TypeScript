// class Hello {
//     name: string;
//     score: number
// // constructor(name: string, score: number){
// //     this.name = name
// //     this.score = score
// // }
// constructor(name: string){
//     this.name = name
//     console.log(this); // this refers to the current context means who have the access of new object (sayHello)
    
// }
// }

// const sayHello = new Hello("harkirat", 100)
// // sayHello.name = "harkirat"


class User{
    public username: string = "harkirat"

    private password: string = "xyz123"

    reveal(){
        return this.password 
    }


}

const newUser = new User()
// newUser.reveal()

class Db{
    protected dbAccess: string = "Employees"
}

class Branch extends Db{
    getAccess(){
        return this.dbAccess // its ok
    }
}

class Company{
    #secretCode  = "1234"

    getAccess(){
        return this.#secretCode
    }
}

const com = new Company()
// com.getAccess()

//read only property

class Username{
    readonly companyName: string = "Abc" 

    constructor(companyName : string){
        this.companyName = companyName
    }
}

class Modern{
    private password = "123"

    get user(){
        return this.password 
    }
    set user(value:string){
        if(value != "123") throw new Error("not match")
        this.password = value
    }
}

const newVersion = new Modern()

newVersion.user = "xyz"

class Chai{
    static test = "chai"

    constructor(public name:string){}
}
console.log(Chai.test);


abstract class Make{
    abstract prepare(): void
}

class newChai extends Make{
    prepare(){
        console.log("harkirat");
        
    }
}

//composition

class Chaining{
    make(){

    }
}

class Ultimate{
    constructor(private head: Chaining){}
        make(){
            this.head.make
        
    }
}