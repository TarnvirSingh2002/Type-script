//we can use Require, Partial, Pick and Omit here 
type chaitypes={
    masala:string;
    sugar:number;
    water:number;
}
const abhi=(order:Pick<chaitypes, "masala" | "sugar" >)=>{
    console.log(order);
}
abhi({masala:"bohot jada", sugar:12});


const nabi = (order: Partial<chaitypes>)=>{
    console.log(order);
}
nabi({water:34});

const khabi= (order:Omit<chaitypes, "water">)=>{
    console.log(order);
}
khabi({sugar:12,masala:"deideij"});
khabi({sugar:12,masala:"ijijd"})