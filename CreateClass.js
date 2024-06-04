class Employee{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
    greet(){
        console.log(`hello ${this.name}`);
    }
    get Info(){
        return this.name;
    }
    printDetail(){
        console.log(`Name and Email of employee is ${this.name} and ${this.email}`);
    }
    

}
const employee1=new Employee("Rishabh","rishabhy755@gmail.com");
const employee2=new Employee("Rakesh","Rakesh123@gmail.com");
console.log(employee1);
console.log(employee2);
 employee1.greet();
 console.log(employee1. Info);
 employee1.printDetail();
 