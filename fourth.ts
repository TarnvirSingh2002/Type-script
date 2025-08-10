
//class
class k{
    readonly nama : string="sjsijsijs"//we can not access outside of this if we r using private keyword
    email : string
    private name : string ="ded" //#is used to make it private it is used in the js

    constructor(email:string){
        this.email= email;
    }

    get gotaname():string{ //getter 
        //it’s(get) only for making the access look like a property instead of a function call.
        return this.name;
    }

    set setname(localVar : string){ //setter
        this.name = localVar
    }

    protected count : number = 23 //protected we can access in the same or the inheritetd class
}

class another extends k{
    constructor(){
        super("mkmk");
    }
    countfun(){
        console.log(this.count);
    }
}

const x = new k("hekjdkej");
console.log(x.gotaname);
x.setname = "djeijdie";
console.log(x.gotaname);

const anotherObj = new another();
anotherObj.countfun();





//ABSTRACT CLASS 

abstract class Insta{
    person : string

    constructor(person : string ){
        this.person = person;
    }

    abstract n():void

    abstract v:string

    ik(){
        console.log(this.v);
    }

}


class bing extends Insta{
    constructor(h:string){
        super(h)
    }

    n(){
        console.log("ki hal chal dosto!");
    }

    v="hello motto"
}

const obj = new bing("kokjhs");
obj.ik();
obj.n();
console.log(obj.v);

export {}