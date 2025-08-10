"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//class
var k = /** @class */ (function () {
    function k(email) {
        this.nama = "sjsijsijs"; //we can not access outside of this if we r using private keyword
        this.name = "ded"; //#is used to make it private it is used in the js
        this.count = 23; //protected we can access in the same or the inheritetd class
        this.email = email;
    }
    Object.defineProperty(k.prototype, "gotaname", {
        get: function () {
            //it’s(get) only for making the access look like a property instead of a function call.
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
var another = /** @class */ (function (_super) {
    __extends(another, _super);
    function another() {
        return _super.call(this, "mkmk") || this;
    }
    another.prototype.countfun = function () {
        console.log(this.count);
    };
    return another;
}(k));
var x = new k("hekjdkej");
console.log(x.gotaname);
x.setname = "djeijdie";
console.log(x.gotaname);
var anotherObj = new another();
anotherObj.countfun();
//ABSTRACT CLASS
var Insta = /** @class */ (function () {
    function Insta(person) {
        this.person = person;
    }
    Insta.prototype.ik = function () {
        console.log(this.v);
    };
    return Insta;
}());
var bing = /** @class */ (function (_super) {
    __extends(bing, _super);
    function bing(h) {
        var _this = _super.call(this, h) || this;
        _this.v = "hello motto";
        return _this;
    }
    bing.prototype.n = function () {
        console.log("ki hal chal dosto!");
    };
    return bing;
}(Insta));
var obj = new bing("kokjhs");
obj.ik();
obj.n();
console.log(obj.v);
