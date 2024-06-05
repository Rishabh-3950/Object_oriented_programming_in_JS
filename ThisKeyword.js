// this method inside the function in node evronment point to  global object and in the browser that will give window object.
"use strict";
function abc(){
    console.log("i am a function");
    console.log(this);
}
abc();
//use strict --it will give undefined
 
//this keyword inside the object's method point to that object.
const obj={
    x:21,
    y:function(){
        console.log(this);
    },
    z:function(){
        console.log(this);
    }
}
obj.y();


