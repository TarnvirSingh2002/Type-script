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

type shape3={
    type:"cube"
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


//exhaustiveness checking
function nn(shapes : shape | shape2 | shape3){
    switch(shapes.type){
        case "circle":
            return "circle";

        case "rectangle":
            return "rectangle";

        case "cube":
            return "cube";
        
        default:{
            const _typeCheck: never =shapes; //used for good practice
            return _typeCheck;
        }
    }
}