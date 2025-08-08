"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var give = {
    id: 2,
    name: "rarh",
    class: "btech",
    roll: 9,
    // age:4
};
give.age = 33;
console.log(give);
var naam = "tarn";
console.log(naam);
//union type operator
var score = "ts";
score = 123;
console.log(score);
function check(id) {
    //if we are not giving the condition then it will create an error
    if (typeof (id) == "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log("number aw");
    }
}
check("kiad");
check(67);
