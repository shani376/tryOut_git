function person(name,age){
    this.fullname = name;
    this.Age = age;
}

const myFather = new person("David",34)
const myMother = new person("Sara",33)
person.prototype.eyecolor = "green";
person.prototype.toString=function(){
    return this.fullname+" "+this.Age+" "+this.eyecolor
}
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
// document.getElementById("demo").innerHTML ;
// "Father : "+myFather.fullname+" age : "+myFather.Age+
// " Mother : "+myMother.fullname+" age : "+myMother.Age+" "+myMother.eyecolor+
// " "+
// function freezeObj() {
//     const MATH_CONSTANTS = {
//       PI: 3.14
//     };
//     // Only change code below this line
  
  
//     // Only change code above this line
//     try {
//       MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//       console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
//   }
//   const PI = freezeObj();
//   console.log(PI);
// const obj = {
//     name:"FreeCodeCamp",
//     review:"Awesome"
//   };
//   Object.freeze(obj);
//   obj.review = "bad";
//   obj.newProp = "Test";
//   console.log(obj); 
// call = () => {
//     t = document.getElementById("time").innerHTML;
//     console.log(t);
//     let promise = new Promise((res, rej) => {
//         setTimeout(() => res("result"), t);
//         setTimeout(() => rej("reject"), 2000);

//     })
//     promise.then(
//             res => alert("OK " + res),
//             rej => alert("ERR " + rej)
//         )
// }
// // call();
// const num = document.getElementById("in");
// // const button = document.getElementById("btn_assembly");
// const text = document.getElementById("x");
// button.onclick(()=>{
//     console.log("button clicked");
//     assembly(num);
// })
// const num2 = 0
// num.onchange((e)=>{
//     num2 = e.target.value;
// })
// assembly = () =>{

//     console.log(num.value);
//     let sum = 1;
//     for (let i = 1; i < num.value; i++) {
//         sum*=(i+1);
//     }
//     text.innerHTML=sum;
//     setTimeout(() => {
//         text.innerHTML=''; 
//     }, 3000);
    
// }
// timeAndDate = () => {
//     text.innerHTML = new Date()
// }
// recorsy = () => {
//     text.innerHTML = calcFactorial(num.value);
// }
// let calcFactorial = (num) => {
//     if (num === 1) { //  stop recursion
//       return 1;
//     } else { 
//       return (num * calcFactorial(num - 1));
//     }
//   }
//  printNumbers=(num)=>{
//     for(let i=num; i>=1; i--){
//     console.log(i);
//     }
//     }
// let num2 = prompt("enter number:", 5);
// printNumbers(num2);
// worker=()=>{
//     new Worker()
// }
new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 5000);
  })
    .finally(() => alert("Promise ready")) // triggers first
    .then(result => alert(result)); // <-- .then shows "value"