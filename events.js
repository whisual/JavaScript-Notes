//---------------------- Events --------------------------//



// There are two types of events:
// 1. setTimeOut
// 2. setInterval


//------------ setTimeout ----------//


// setTimeout runs a function after the given interval of time (in miliseconds)

// function fn() {
//     console.log("Hello")
// }
// setTimeout(fn, 5000)

// Example:

// const bulb = document.querySelector('.bulb')
// const btn = document.querySelector('.btn')

// const on = () => {
//     bulb.style.backgroundColor = "yellow"
// }

// btn.addEventListener("click", setTimeout(on, 10000))


//------------ setInterval ----------//


// setInterval runs a function continuously at the given interval of time (in miliseconds)

// function fn() {
//     console.log("Hello");
// }
// setInterval(fn, 3000)

// Example:

// const bulb = document.querySelector('.bulb')
// const btn = document.querySelector('.btn')

// let flag = 0
// const onOff = () => {
//     if (flag == 0) {
//         bulb.style.backgroundColor = "yellow"
//         flag = 1
//     }
//     else {
//         bulb.style.backgroundColor = "transparent"
//         flag = 0
//     }
// }
// setInterval(onOff, 1000)


//------------- clearTimeout -----------//


// clearTimeout clears the running setTimeout event

// function fn() {
//     console.log("Hello");
// }
// let event = setTimeout(fn, 5000)
// clearTimeout(event, 4000)


//------------- clearInterval ------------//


// clearInterval clears the running setInterval event

// function fn() {
//     console.log("Hello");
// }
// let event = setInterval(fn, 2000)
// clearInterval(event, 3000)