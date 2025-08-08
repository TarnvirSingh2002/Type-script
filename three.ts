// tuples
let arr:[number, boolean, string]=[23, true, "ijhcifee"];
arr.push("dhdihf");
console.log(arr);

//with type
type User = [number, string]
const use: User = [78,"huuh"];
use[1]="idjeijdiej";
console.log(use);



//interface
interface n{
    name:string,
    addone:()=> number,
    minus() : number,
    total (coll: string):void 
}

const tarn: n={
    name:"tftftf",
    addone:()=>{
        return 2+1;
    },
    minus:()=>{
        return 3-1
    },
    total:(c="dufhurhf")=>{
        return c
    }
}
console.log(tarn.total("jjh"));


// More about interface
interface t{
    engine:string | number,
    diesel:boolean,
    cylinders:number
}

interface t{
    color:string
}

interface another extends t{ //we can also inherit the interface
    new: boolean
}
const us : t={
    engine:"v8",
    diesel:false,
    cylinders:8,
    color:"black"
}


export {}