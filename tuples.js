var a = ["hello", true, 23];
a.push("dd"); //this is also we can say as a loop hole
console.log(a);
//Named tuples
var portfolio = ["tarnvir", 34, "btech"];
portfolio.push("lolo");
console.log(portfolio);
console.log(portfolio[2]);
//Enum
var digri;
(function (digri) {
    digri[digri["SMALL"] = 0] = "SMALL";
    digri[digri["BIG"] = 1] = "BIG";
    digri[digri["MEDIUM"] = 2] = "MEDIUM";
})(digri || (digri = {}));
console.log(digri.MEDIUM);
var duja;
(function (duja) {
    duja[duja["FLAT"] = 12] = "FLAT";
    duja[duja["PENTHOUSE"] = 15] = "PENTHOUSE";
    duja[duja["DUPLEX"] = 17] = "DUPLEX";
})(duja || (duja = {}));
console.log(duja.FLAT);
//never data type is used in places where execution is not going to end normally.
