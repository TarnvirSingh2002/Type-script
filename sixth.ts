// narrowing
function narrow(str:string | Array<string> | null):void{
    if(str){
        if(typeof str == "object"){
            for(let i=0;i<str.length;i++){
                console.log(str[i]);
            }
        }
        else{
            console.log(str);
        }
    }
    else{
        console.log("hup");
    }
}
narrow("");


// for objects
function narrowobj(sr: Date | string){
    if(sr instanceof Date){
        console.log("from the time!");
    }
    else{
        console.log(sr);;
    }
}

narrowobj(new Date()); 



// using type predicates (not understand)
type fish={ 
    swim:()=>void,
}

type animal={
    walk():void
}
function isfish(pet:fish | animal):pet is fish{
    return (pet as fish).swim()!==undefined;
}

function getFood(pet: fish | animal){
    if(isfish(pet)){
        console.log("this is a fish!");
    }
    else{
        console.log("animal")
    }
}

getFood({ walk: () => console.log("fish") });
export {}