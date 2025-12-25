function a () {
    console.log("hell no");
}
new a();

const t = () =>{ //it will not work Arrow functions cannot be used as constructors.
    console.log("hello world");
}
new t();