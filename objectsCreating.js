//object literal
const user={
    names:["john","bob"],
    age:23,
    printDetail:function(){
        console.log("detail of user");
    },
    greet:function(){
        console.log("Hello");
    }
}
console.log(user.names);
console.log(user.age);
user.printDetail();
user.greet();

//lets store the object inside object
const users={
    names1:{
        firstName:"John",
        lastName:"bob"
    }
}
console.log(users.names1.firstName);
console.log(users.names1.lastName);

//bracket notation
function logProperty(propertyName){
    console.log(user[propertyName]);

}
logProperty("age");

//update the existing properties
users["names1"]["firstName"]="Alice";
console.log(users.names1);

users.names1.firstName="Alice_new";
console.log(users.names1);

//set new properties
users.hobby=["Listening music","cooking"];

users.fareWell=function() {
    console.log("Good bye!!");
};
console.log(users);
users.fareWell();
