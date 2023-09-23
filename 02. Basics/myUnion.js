var score = 33;
score = 44;
score = "55";
var hendy = { name: "Hendy", id: 334 };
hendy = { username: "hy", id: 334 };
// function getDbId(id: number | string) {
//     // Making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else if (typeof id === "number") {
        id + 2;
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3];
var pi = 3.14;
var seatAllotment;
seatAllotment = "aisle";
