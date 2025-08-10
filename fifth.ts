//generics
const score : Array<number>=[];
const name : Array<string> =[];

//It’s just a placeholder for the actual type that gets inferred or passed 
//when calling the function.
function bingo<T>(val:T):T{
    return val;
}
bingo(8);


// function tin <T extends number> (val:T[]):T{
//     let o = 0 as T;
//     for(let i=0;i<val.length;i++){
//        o = (o + val[i]) as T;
//     }
//     return o;
// } 

// console.log(tin([5,8,9,0]));


function g <typ,>(j:typ[]):typ{
    const k = 90
    return j[3];
}
console.log(g([90,0,0,43]));


//generics in arraow functions
const a=<t>(val:t):t=>{
    return (val);
}

console.log(a(34));









// generics classes
function v<type, atype extends number>(t:type, a:atype):{}{
    return{
        t,a
    }
}
v("jiji", 90);




class fistfight<y>{
    cart : y[] = [];
    cargo : y[] = [];
    add(val:y){
        this.cart.push(val);
    }
    addnum(val:y){
        this.cargo.push(val)
    }
    showmore(){
        console.log(this.cargo);
    }
    show(){
        console.log(this.cart);
    }
}

// const oa=new fistfight<string>();
const oa=new fistfight();
oa.add("hih");
oa.add("iji");
oa.add("okl");
oa.add("sdf");
oa.addnum(890);
oa.addnum(89);
oa.show();
oa.showmore();
export {}