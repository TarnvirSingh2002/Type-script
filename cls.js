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
var Older = /** @class */ (function () {
    function Older(ele) {
        var _this = this;
        this._val = 78; //use of private
        this.conso = function () {
            console.log(_this._val);
            console.log(_this.ele);
        };
        this.ele = ele;
    }
    return Older;
}());
var obj = new Older("incj");
obj.conso();
//using protected
var Chai = /** @class */ (function () {
    function Chai() {
        this.water = "10Liter";
    }
    return Chai;
}());
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee() {
        var _this = _super.call(this) || this;
        _this.give = function () {
            console.log(_this.water);
        };
        return _this;
    }
    Coffee.prototype.givea = function () {
        return this.water;
    };
    return Coffee;
}(Chai));
var obj2 = new Coffee();
console.log(obj2.givea());
//using  getter and setter method
var father = /** @class */ (function () {
    function father(_property) {
        // wheather we can initilize on the place we declare or in the constructor
        this._salary = 0;
        this._property = _property;
    }
    Object.defineProperty(father.prototype, "sal", {
        set: function (_salary) {
            this._salary = _salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(father.prototype, "saldata", {
        get: function () {
            return this._salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(father.prototype, "data", {
        get: function () {
            return this._property;
        },
        enumerable: false,
        configurable: true
    });
    return father;
}());
var obj4 = new father("40 killa");
console.log(obj4.data); //in getter method we dont need to call it 
obj4.sal = 900; // also we dont need to call the setter method
console.log(obj4.saldata);
//abstract method
var abstractExample = /** @class */ (function () {
    function abstractExample() {
    }
    return abstractExample;
}());
var huge = /** @class */ (function (_super) {
    __extends(huge, _super);
    function huge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.con = "ijko"; // dont need to use this when we use abstract variable or a function
        return _this;
    }
    huge.prototype.eovalue = function () {
        return 90;
    };
    return huge;
}(abstractExample));
var obj5 = new huge();
console.log(obj5.eovalue());
console.log(obj5.con);
// use of static keyword
var gclas = /** @class */ (function () {
    function gclas() {
    }
    gclas.ji = function () {
        console.log("hello world");
    };
    gclas.num = 92;
    return gclas;
}()); //we can access the staic variable or function without creating an object
console.log(gclas.num);
gclas.ji();
