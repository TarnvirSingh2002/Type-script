const a:[string,boolean,number]= ["hello",true,23];
a.push("dd");//this is also we can say as a loop hole
console.log(a);


//Named tuples
let portfolio:[name:string, rollNo:number, classes:string] = ["tarnvir",34,"btech"];
portfolio.push("lolo")
console.log(portfolio);
console.log(portfolio[2]);



//Enum
enum digri{
    SMALL, //best practice is to write in Capital letters
    BIG,
    MEDIUM
}
console.log(digri.MEDIUM);


enum duja{
    FLAT=12,//best practice is that take all the values of same datatype i.e string,number etc
    PENTHOUSE=15,
    DUPLEX=17
}
console.log(duja.FLAT);



//never data type is used in places where execution is not going to end normally.