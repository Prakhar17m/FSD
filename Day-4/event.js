// function aa(){
//     console.log("first");
// }
// setTimeout(aa,2000);

// //IIFE
// (function() {
//     console.log("second");
// })();

// let b = ()=>{
//     console.log("third");
// }


// function rollnumber(num){
//     console.log("rollno is:",num);
// }
// setTimeout(rollnumber,1000,20220151022);



// function rollnumber(num){
//     setTimeout(()=>{
//         console.log("rollno is:",num);
//     },3000)
// }
// rollnumber(2024);


// function rollnumber(num, delay, nextroll){
//     setTimeout(()=>{
//         console.log("rollno is:",num);
//         if(nextroll) nextroll();
//     }, delay)
// }
// rollnumber(2024, 1000, ()=>{
//     rollnumber(2025, 2000, ()=>{
//         rollnumber(2026, 3000,()=>{
//             rollnumber(2027, 4000);
//         })
//     })
// });

// const promise = new Promise(function(resolve, reject){
//     console.log("my first promise")
//     // resolve("resolved");
//     reject("rejected");
// });
// promise.then(() => {
//     console.log("my first then")
// }).catch(()=> {
//     console.log("my first catch")
// })


// let promise1 = function getPromise() {
//     return new Promise((resolve,reject) => {
//         resolve("Promise")
//     })
// }




// function getRoll(num, delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("rollno is:",num);
//             resolve("successfull doney");
//         }, delay)
//     });
// }
// getRoll(1, 1000).then(() => {
//     getRoll(2, 2000).then(() => {
//       getRoll(3, 30000);
//     });
//   }); 


// let promise = new Promise((resolve,reject)=>{
//     resolve({user:"prakhar",pass: "123446"});
// })
// promise.then((data)=>{
//     console.log(data);
//     return data;
// }).then((res)=>{
//     console.log(res.user);
// }).catch(() =>{
//     console.log("error");
// }).finally(() =>{
//     console.log("finally");
// })


