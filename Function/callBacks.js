
function myFunc(object){
    console.log(object);
}

myFunc({username : 'akshad',userAge : '21'})
console.dir(myFunc)


//higher order function
function a(b){
    console.dir(b);
    b()
}

function sayHi(){
    console.log('hiiiiiiiiii');
}

//a(sayHi)  callback function

// anonymous function mostly used in js
// also called callback function -> which has no identifier and defining only for specific passing  argument || pass kiya jane wala function is also called callback function 
a(function(){
    console.log('calling from anonymous function');
})
 


// synchronous code is the code which directly goes to the call stacks
// asynchronous code is the code which first enters into Web Apis then callback Queue then CallStack