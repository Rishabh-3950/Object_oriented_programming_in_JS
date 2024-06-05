// it means function sharing
const user={
    firstName:"Rishabh",
    lastName:"Yadav",
    fullName:function(){
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }


}
user.fullName();
const user2={
    firstName:"bill",
    lastName:"gates"
}
user.fullName.call(user2);


