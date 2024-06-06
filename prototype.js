const user={
    name1:"Rishabh",
    city:"Mainpuri",
    printDetail:function(){
        console.log(`my name is ${this.name}`);
    }
}
const arr=[1,2,3,4,5];

//let name2="Riahabh Yadav";

//shadowing properties
const myDate=new Date(2024,0,3);
myDate.getFullYear=function(){
   
    console.log("New date function added");
}
myDate.toString=function(){
console.log("to string Function");
}


//Prototype and Inheritence
const parent={
a:20,
b:30,
sum:function(){
    console.log(this.a+this.b);
}
}
const child={
    
    c:20,
    d:30,
    mul:function(){
        console.log(this.c*this.d);
    }
}
child.__proto__=parent;
//now protype of child object will become parent object.
