console.log("hello world");


//! how to make a function
function f(num:number):void{
    console.log(num);
}
f(5);


// arrow function
const a = (num1:number, num2:number): number => {
    return num1+num2;
}
let v:number
v=a(2,4);
console.log(v);


//Arrays
let arr=["tarn", "vir","singh", "ji"];
let arr2 = arr.map((ele):string=> `upper are ${ele.toUpperCase()}`);// it is returning a string
console.log(arr2);


//A function takes Objects and return object
function objec({n, p}:{n:string, p:string}):{}{
    return {
        na:n,
        tu:p
    }
}

console.log(objec({n:"nini",p:"koi"}));


//type
type t={
    name:string;
    roll:number;
}

function typ({name, roll}:t):t{  // we can also use ( tt: t) in this
    console.log(name);
    console.log(roll);
    //re assigning the value into name, roll
    return {
        name ,
        roll : 78
    }
}
console.log(typ({name:"tarnvir",roll:56}));


export {}