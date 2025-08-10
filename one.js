"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello world");
//! how to make a function
function f(num) {
    console.log(num);
}
f(5);
// arrow function
var a = function (num1, num2) {
    return num1 + num2;
};
var v;
v = a(2, 4);
console.log(v);
//Arrays
var arr = ["tarn", "vir", "singh", "ji"];
var arr2 = arr.map(function (ele) { return "upper are ".concat(ele.toUpperCase()); }); // it is returning a string
console.log(arr2);
//A function takes Objects and return object
function objec(_a) {
    var n = _a.n, p = _a.p;
    return {
        na: n,
        tu: p
    };
}
console.log(objec({ n: "nini", p: "koi" }));
function typ(_a) {
    var name = _a.name, roll = _a.roll;
    console.log(name);
    console.log(roll);
    //re assigning the value into name, roll
    return {
        name: name,
        roll: 78
    };
}
console.log(typ({ name: "tarnvir", roll: 56 }));
