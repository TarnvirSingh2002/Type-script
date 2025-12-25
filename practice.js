function tinu(item) {
    if (item.type == "special") {
        console.log("special", item.price);
    }
    if (item.type == "masala") {
        console.log("masala", item.quantity);
    }
}
tinu({ type: "special", price: 8 });
