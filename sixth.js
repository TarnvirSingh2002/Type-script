"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// narrowing
function narrow(str) {
    if (str) {
        if (typeof str == "object") {
            for (var i = 0; i < str.length; i++) {
                console.log(str[i]);
            }
        }
        else {
            console.log(str);
        }
    }
    else {
        console.log("hup");
    }
}
narrow("");
// for objects
function narrowobj(sr) {
    if (sr instanceof Date) {
        console.log("from the time!");
    }
    else {
        console.log(sr);
        ;
    }
}
narrowobj(new Date());
function isfish(pet) {
    return pet.swim() !== undefined;
}
function getFood(pet) {
    if (isfish(pet)) {
        console.log("this is a fish!");
    }
    else {
        console.log("animal");
    }
}
getFood({ walk: function () { return console.log("fish"); } });
