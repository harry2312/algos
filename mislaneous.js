// const Events = require("events");
// const Emitter = new Events();
// Emitter.on("hey", ()=>{
//   console.log("Hello")
// });
// Emitter.on("hey", ()=>{
//   console.log("Heyyy")
// });
// Emitter.emit("hey");

// function add(...arg1) {
//   function addReturn(...arg2) {
//     return add(...arg1, ...arg2);
//   }
//   addReturn.value = arg1.reduce((c, v) => c + v);
//   return addReturn;
// }

// console.log(add(1)(2)(3)(4)(5).value);

// (function(){
//   var a = b = 3;
// })();
// console.log(typeof a !== "undefined");
// console.log(typeof b !== "undefined");

// var length = 10;
// function fn() {
//     console.log( this.length );
// }

// var obj = {
//     length: 5,
//     method: function( fn ) {
//         fn();
//         arguments[0]();
//     }
// };

// obj.method( fn, 1 );