// const User = {
//     name: "Hendy",
//     email: "hendy.sg02@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}


// let newUser = {name: "hendy", isPaid: true, email: "h@h.com"}

// createUser(newUser)


// function createCouse(): {name: string, price: number} {
//     return {name: "reactjs", price: 399}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// type Mystring = string

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

function createUser(u: User) {}

let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"

export {}