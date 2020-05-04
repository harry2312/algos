function Foo(who) {
  this.me = who;
}
Foo.prototype.identify = function () {
  return "I am " + this.me;
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");
a1.__proto__ === Foo.prototype;
a1.constructor === a2.constructor;
a2.__proto__ === a2.constructor.prototype;

console.dir(a1);
console.dir(a2);

// var cat = {
//     name: "foo",
//     age: 24
// };
// const greet = () => {
//     return `Hi ${this.name} age ${this.age}`;
// }

// console.log(greet.call(cat));
// function Ask(fname) {
//   this.fname = fname;
// }
// Ask.prototype.getName = function () {
//   return this.fname;
// };

// function Bsk(fname, sname) {
//   Ask.call(this, fname);
//   this.sname = sname;
// }
// Bsk.prototype.fullName = function () {
//   return this.fname + this.sname;
// };
// Bsk.prototype = Object.create(Ask.prototype);
// Bsk.prototype.constructor = Bsk;

// var name = new Bsk("harry", "sharma");
// console.log(name.fullName());
