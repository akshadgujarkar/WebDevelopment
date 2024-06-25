//this will not give any error becoz 
// first memory allocation performs in javascript
// then second code execution part is performed
showMessage() //function is already present in memory

//global scope
function showMessage()
{
    const a = 10
    const b = 243
    console.log('function is called before defining');

}

func1() 

function func1()
{
   console.log(addSum(4,5)); 
}
function addSum(a,b){
    return a + b
}


//callStack overflow context exceeded
// introduceMe();
// function introduceMe()
// {
//     console.log('hi my name is akshad gujarkar');
//     introduceMe();
// }

  
console.log(variable); //access before initalization 
var variable = 20


// temporal dead zone for let and const
console.log(variable2); // can't access before initalization

let variable2 = 10

console.log(abc); //can't access before initalization
 
const abc = 132

// sayHi()   can't access before initalization 
const sayHi = function() {
    console.log(" can't access before initalization ");
}

sayHi()
