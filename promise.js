//-------------------------------------------------- Promise --------------------------------------------------//


//---------------- .then.catch.finally method -----------//

// In this method promise has two states. It either fulfilled or rejected
// If a promise is fulfilled, it will be resolved and it will go in .then part.
// If a promise is rejected, it will be rejected and it will go in .catch part.


// const prom = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             console.log("No Error");
//             resolve()
//         }
//         else {
//             console.log("Error");
//             reject()
//         }
//     }, 2000)
// })
// prom.then(function () {
//     console.log("Hello");
// })
//     .then(function () {
//         console.log("Hello 2");
//     })
//     .catch(function () {
//         console.log("Error Something Went Wrong");
//     })
//     .finally(() => console.log("Finally"))



//-------------------- Async Await method ----------------//

//In this method if promise is resolved then try part will work or if promise is not resolved then catch part will work


// async function asyncFunc() {
//     try {
//         const response = await prom1
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// asyncFunc();
