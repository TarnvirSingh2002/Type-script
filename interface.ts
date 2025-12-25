interface chaiaurcode{
    masala:string, //we can also create it readonly which can never be reinitilize
    price:number
}

let arabhic = (ele:chaiaurcode) =>{
    return ele;
}
console.log(arabhic({masala:"adhrak",price:30}));





// multiple interfaces
interface User{
    name:string
}
interface User{
    rollno:number
}
function usee(el:User){
    return el;
}
usee({name:"katapa", rollno:34});





//we can also inherit the interfaces

interface one{
    na:string
}
interface two{
    college:string
}
interface three extends one, two{
    place:string
}

let result = (elem:three) => {
    return elem;
}
console.log(result({na:"dd",place:"pune",college:"furguson college"}));