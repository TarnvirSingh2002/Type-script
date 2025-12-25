function am(ele) {
    console.log(ele);
}
am({ masala: true, price: 345, pack: 2 }); //Union types allow objects that satisfy at least one member of the union
var small = {
    quantity: 89
};
var big = { tinu: "jiji", mk: "opm", quantity: 90 };
small = big; // atleast where we assign it must be satisfied
console.log(small);
//using unknown type 
var an;
an = 0.78;
console.log(typeof (an));
an = "koku";
console.log(typeof (an));
