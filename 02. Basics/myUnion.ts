let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}


let hendy: User | Admin = {name: "Hendy", id: 334}

hendy = {username: "hy", id: 334}

// function getDbId(id: number | string) {
//     // Making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3)
getDbId("3")


function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    } else if (typeof id === "number") {
        id + 2
    }
}

// array
const data: number[]  = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = ["1", "2", 3]

let pi:3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"