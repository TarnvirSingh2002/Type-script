type chai={
    masala:boolean,
    price:number
}
type bis = {
    pack:number
}

type half = chai | bis;
type full = chai & bis;//Intersection types allow objects that satisfy both members of the union
function am(ele:half){
    console.log(ele);
}

am({masala:true,price:345,pack:2});//Union types allow objects that satisfy at least one member of the union



//Providing extra value 

type dd={quantity:number};
let small:dd = {
    quantity:89
};

let big = {tinu:"jiji",mk:"opm",quantity:90};
small =big; // atleast where we assign it must be satisfied
console.log(small);


//using unknown type 
let an:unknown;
an=0.78;
an="koku";
(an as string).toUpperCase();