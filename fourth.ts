
//class
class k{
    readonly nama : string="sjsijsijs"//we can not access outside of this if we r using private keyword
    email : string
    private name : string ="ded" //#is used to make it private it is used in the js
    constructor(email:string){
        this.email= email;
    }

    get gotaname():string{ //getter 
        return this.name;
    }

    set setname(localVar : string){ //setter
        this.name = localVar
    }
}
const x = new k("hekjdkej");
console.log(x.gotaname);
x.setname = "djeijdie";
console.log(x.gotaname);

export {}