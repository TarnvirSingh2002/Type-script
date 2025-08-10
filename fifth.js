"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//generics
var score = [];
var name = [];
//It’s just a placeholder for the actual type that gets inferred or passed 
//when calling the function.
function bingo(val) {
    return val;
}
bingo(8);
// function tin <T extends number> (val:T[]):T{
//     let o = 0 as T;
//     for(let i=0;i<val.length;i++){
//        o = (o + val[i]) as T;
//     }
//     return o;
// } 
// console.log(tin([5,8,9,0]));
function g(j) {
    var k = 90;
    return j[3];
}
console.log(g([90, 0, 0, 43]));
//generics in arraow functions
var a = function (val) {
    return (val);
};
console.log(a(34));
// generics classes
function v(t, a) {
    return {
        t: t,
        a: a
    };
}
v("jiji", 90);
var fistfight = /** @class */ (function () {
    function fistfight() {
        this.cart = [];
        this.cargo = [];
    }
    fistfight.prototype.add = function (val) {
        this.cart.push(val);
    };
    fistfight.prototype.addnum = function (val) {
        this.cargo.push(val);
    };
    fistfight.prototype.showmore = function () {
        console.log(this.cargo);
    };
    fistfight.prototype.show = function () {
        console.log(this.cart);
    };
    return fistfight;
}());
var oa = new fistfight();
oa.add("hih");
oa.add("iji");
oa.add("okl");
oa.add("sdf");
oa.addnum(890);
oa.addnum(89);
oa.show();
oa.showmore();
