const maths = {
  E: 23443890.434,
  add: function (a, b) {
    return a + b;
  },
  square: function (a) {
    return a * a;
  },
};


console.log(maths.add(2,4))
console.log(maths.square(5))
console.log(maths.E);

console.log(`subtract function is called ${subtract(10,5)}`);
function subtract(a,b){
    return a -b 
}