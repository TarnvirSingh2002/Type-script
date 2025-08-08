type object1={
    readonly id:number
    name:string
    class:string
    roll:number
    age?:number // optional property operator ?
}

const give:object1={
    id:2,
    name:"rarh",
    class:"btech",
    roll:9,
    // age:4
}

give.age=33;
console.log(give);


//in this we create our own String type
type myString = string;

const naam : myString = "tarn";
console.log(naam);


//union type operator
let score : number | string = "ts";
score = 123;
console.log( score );

function check(id: string | number){
    //if we are not giving the condition then it will create an error
    if(typeof(id) == "string"){
        console.log(id.toUpperCase());
    }
    else{
        console.log("number aw");
    }
}

check("kiad");
check(67);


//Arrays
let arr: number[] | string[] =[6,9,0,6,1]; //it can be either all strings or all numbers
let arr2: (number | string | boolean)[] =[6,91,true,"fjvf",8.9];


//constant
let a:34=34;


export {}