// function rollnumber(num, delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("rollno is:"+ num);
//             reject();
//         }, delay)
//     })
// }
// rollnumber(2024, 1000).then(()=>{
//     rollnumber(2025, 2000).then( ()=>{
//         rollnumber(2026, 3000).then(()=>{
//             console.log("all rolls are done");
//         })
//     })
// });



// async function getRoll(){
//     let roll1 = await rollnumber(1212,1000);
//     let roll2 = await rollnumber(1212,2000);
//     let roll3 = await rollnumber(1212,3000);
// }




// function rollnumber(num, delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("rollno is:"+ num);
//             resolve("success");
//         }, delay)
//     });
// }
// rollnumber(2024, 1000).then(()=>{
//     rollnumber(2025, 2000).then( ()=>{
//         rollnumber(2026, 3000);
//     });
// });
// async function printrollnumbers(){
//     await rollnumber(1,1000);
//     await rollnumber(2,2000);
//     await rollnumber(3,3000);
// }
// printrollnumbers();




// function foodorder(item, delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("enter the food item:"+ item);
//             resolve("success");
//         }, delay)
//     });
// }
// rollnumber("maggie", 1000).then(()=>{
//     rollnumber("noodle", 2000).then( ()=>{
//         rollnumber("roti", 3000);
//     });
// });



// function orderDish(dish, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(Dish "${dish}" is ready.);
//             resolve(Enjoy your ${dish}!);
//         }, delay);
//     });
// }

// orderDish('Pizza', 1000)
//     .then(() => orderDish('Pasta', 2000))
//     .then(() => orderDish('Salad', 3000))
//     .then(() => {
//         console.log("All dishes are served!");
//     })
//     .catch((error) => {
//         console.error("Error in serving:", error);
//     });

//     async function orderAllDishes() {
//         try {
//             await orderDish('Pizza', 2000);
//             await orderDish('Pasta', 3000);
//             await orderDish('Salad', 1000);
//             console.log("All dishes are served!");
//         } catch (error) {
//             console.error("Error in serving:", error);
//         }
//     }
    
    
//     orderAllDishes();




// let url = 'https://api.github.com/users/Prakhar17m';
// let b = fetch(url);
// b.then((data) =>{
//     console.log(data);
//     return data.text();
// }).then((data)=>{
//     console.log(data);
// }).catch(() =>{
//     console.log("error");
// }).finally(() =>{
//     console.log("finally");
// })
// async function fetchData() {
//     let url = 'https://api.github.com/users';
//     let b = await fetch(url);
//     let data = await b.json();
//     console.log(data);
// }
// fetchData();

