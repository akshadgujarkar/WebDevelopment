
function introduceMe(){
    console.log('my name is akshad');
    console.log('i am studying at anjuman polytechnic');
}

introduceMe()

function add(a,b){
    console.log(`Addition of two number is ${parseInt(a)+parseInt(b)}`);
}

const num1 = prompt('Enter the first number')
const num2 = prompt('Enter the second number')
add(num1,num2)

function substraction(a,b){
    return a - b
}
console.log('sub function : ' + substraction(98,30));


function intro(name = 'akshad'){
    console.log(`my name is ${name} hello`)
}
intro()



