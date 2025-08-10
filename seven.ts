// interface circle{
//     type:"circle"
// }

// interface rectangle{
//     type:"rectangle"
// }

// type shapes= circle | rectangle;

type shape = {
    type:"circle"
}

type shape2 = {
    type:"rectangle"
}

function n(shape: shape | shape2){
    if(shape.type === "circle"){
        return "circle"
    }
    else{
        return "rectangle";
    }
}
console.log(n({type:"rectangle"}))