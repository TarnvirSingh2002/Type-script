// interface circle{
//     type:"circle"
// }
function n(shape) {
    if (shape.type === "circle") {
        return "circle";
    }
    else {
        return "rectangle";
    }
}
console.log(n({ type: "rectangle" }));
