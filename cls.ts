class Older{
    private _val=78; //use of private
    ele : string;
    constructor(ele:string){
        this.ele = ele;
    }
    conso=()=>{
        console.log(this._val);
        console.log(this.ele);
    }
}
const obj =new Older("incj");
obj.conso();






//using protected
class Chai{
    protected water:string= "10Liter"
}

class Coffee extends Chai{
    constructor(){
        super();
    }
    givea(){
        return this.water;
    }

    give=()=>{
        console.log(this.water);
    }
}
const obj2 = new Coffee();
console.log(obj2.givea());







//using  getter and setter method
class father{
    private _property:string; //we must have to initilize the private method 
    // wheather we can initilize on the place we declare or in the constructor

    private _salary:number=0;

    constructor(_property:string){
        this._property=_property;
    }

    set sal(_salary:number){
        this._salary = _salary;
    }

    get saldata (){
        return this._salary;
    }

    get data():string{
        return this._property;
    }
}

const obj4 = new father("40 killa");
console.log(obj4.data);//in getter method we dont need to call it 
obj4.sal=900;// also we dont need to call the setter method
console.log(obj4.saldata);



//abstract method
abstract class abstractExample{// abstract method or variable must be in a abstract class 
    abstract con : string;
    abstract eovalue():number;
}

class huge extends abstractExample{
    con="ijko";// dont need to use this when we use abstract variable or a function
    eovalue(): number {
        return 90;
    }
}

const obj5 = new huge();
console.log(obj5.eovalue());
console.log(obj5.con);






// use of static keyword
class gclas{
    static num:number=92;
    static ji():void{
        console.log("hello world");
    }
}//we can access the staic variable or function without creating an object
console.log(gclas.num)
gclas.ji();