"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class
var k = /** @class */ (function () {
    function k(email) {
        this.nama = "sjsijsijs"; //we can not access outside of this if we r using private keyword
        this.name = "ded"; //#is used to make it private it is used in the js
        this.email = email;
    }
    Object.defineProperty(k.prototype, "gotaname", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(k.prototype, "setname", {
        set: function (localVar) {
            this.name = localVar;
        },
        enumerable: false,
        configurable: true
    });
    return k;
}());
var x = new k("hekjdkej");
console.log(x.gotaname);
x.setname = "djeijdie";
console.log(x.gotaname);
