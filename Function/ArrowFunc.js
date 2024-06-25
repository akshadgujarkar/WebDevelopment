const square = (number) =>{
    return number*number
}

console.log(square(5));

//without curly braces in arrow function implicitly return the without using return keywords
const sub = (number) => number - number
console.log(sub(5));

setTimeout(()=>{
    console.log('hiii');
},2000)