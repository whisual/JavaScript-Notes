// ---------------------------------------------- DOM Manipulation ---------------------------------------------------//


// There are for pillars of dom manipulation
//  1. Selecting DOM
//  2. Changing HTML
//  3. Changing CSS
//  4. Adding a listener


//----------------- 1. Selecting DOM ---------------------//

// We can select DOM elements by many type
//  a) Selecting by id
// const a = document.getElementById('bulb')


//  b) Selecting by class
// const b = document.getElementsByClassName('bulb')

//  c). Selecting by tag name
// const c = document.getElementsByTagName('h1')

//  c) Selecting by universal query
// const d = document.querySelector('#bulb')
// const e = document.querySelector('.bulb')
// const f = document.querySelector('h1')

// Note: we can select all elements with same id, className or tag name using querySelectorAll
// const g = document.querySelectorAll('div')


//------------------ 2. Changing HTML --------------------//


// 1. Changing using innerText
// const a = document.querySelector('h1')
// a.innerText = "Changed DOM"

// 2. Changing using innerHTML
// const b = document.querySelector('h1')
// b.innerHTML = "Changed DOM Again"


//----------------- 3. Changing CSS ----------------------//


// const a = document.querySelector('.container')
// const b = document.querySelector('h1')
// const c = document.querySelector('#bulb')

// a.style.backgroundColor = "#010101"
// b.style.color = "white"
// c.style.border = "1px solid white"
// c.style.backgroundColor = "yellow"


//----------------- 4. Adding a listener -----------------//



// const a = document.querySelector('.container')
// const b = document.querySelector('h1')
// const c = document.querySelector('#bulb')
// const d = document.querySelector('.btn')

// d.addEventListener("click", (e) => {
//     a.style.backgroundColor = "#010101"
//     b.style.color = "white"
//     c.style.border = "1px solid white"
//     c.style.backgroundColor = "yellow"
//     d.style.color = "black"
//     d.style.backgroundColor = "white"
// })


//------------------------------------------------------------//

// Que. Create a bulb and an on/off switch and make it functional

// Ans.
// const a = document.querySelector('.container')
// const b = document.querySelector('h1')
// const c = document.querySelector('#bulb')
// const d = document.querySelector('.btn')

// let flag = 0

// d.addEventListener("click", (e) => {
//     if (flag == 0) {
//         a.style.backgroundColor = "black"
//         b.style.color = "white"
//         c.style.border = "1px solid white"
//         c.style.backgroundColor = "yellow"
//         d.style.color = "black"
//         d.style.backgroundColor = "white"
//         flag = 1
//     }
//     else {
//         a.style.backgroundColor = "white"
//         b.style.color = "black"
//         c.style.border = "1px solid black"
//         c.style.backgroundColor = "transparent"
//         d.style.color = "white"
//         d.style.backgroundColor = "black"
//         flag = 0
//     }
// })