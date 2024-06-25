
const a = 10
const b = 23

function add(){
    console.log(a+b);
}
add()

console.dir(add); // display's function in object format (keyvalue pairs) 


//higher order function 
// is a function who receive function as argument or return function


function parent(){
    function child()
    {
        console.log(b - a);
   
    }
    return child
}

const sub = parent()
console.dir(sub);


//closure  Closure {a:10 , b :34}
function parent1()
{
    const a = 10 
    const b = 34
    function child1()
    {
       console.log(a+b);
    }
    return child1
}

const add1 = parent1();



function outer(){
    function parent2(){
        const a = 7;
        const b = 3;
        function child2(){
            console.log(a * b);
        }
        return child2
    }
    return parent2()
}

const mul = outer()
console.dir(mul);//child2()
mul();
