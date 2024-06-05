// it means function sharing
const user={
    firstName:"Rishabh",
    lastName:"Yadav",
  
    


}
let fullName=function(color,hobby){
    console.log(`My name is ${this.firstName} ${this.lastName} my favorite color is ${color}`);
    console.log(`my hobbies is ${hobby}`);
}
//call
fullName.call(user,"black","cooking");
//apply
fullName.apply(user,["black","cooking"]);
//bind
const printFullName=fullName.bind(user,"black","cooking");
console.log(printFullName);
printFullName();

user.fullName;
const user2={
    firstName:"bill",
    lastName:"gates"
}
fullName.call(user2,"orange","teaching");

//apply method
const obj1={
    firstName1:"first_name",
    lastName1:"last_name"

}
const obj2={
    firstName1:"Schine",
    lastName1:"Tendulkar"
    
}
function FullName1(age,hobby){
    console.log(`my name is ${this.firstName1} ${this.lastName1} and my age is ${age} and hobby is ${hobby}`);


}
FullName1.apply(obj2,[23,"cooking"]);

//bind method
const boj3={
    name3:"tony",

}
const Obj4={
    name3:"steve"
}
let printName=function(){
console.log(`my name is ${this .name3}`);
}

let name5=printName.bind(Obj4);
console.log(name5);
name5();

