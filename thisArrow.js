function x(){
    console.log(this);
}
x();
const func=()=>{
    console.log(this);

}
func();
const obj={
    x:5,
    z:function(){
       const y =()=>{
            console.log(this);
        }
        y();

    }
   
}
obj.z();