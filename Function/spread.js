// spread operator is used only in objects, array, string 
const a1 = [1,23,5,7,15,8]
const a2 = [76,8439,1,7,348,956]
// console
const string = 'akshad'
const concat = [...a1,...a2,...string] //shallow copy 
console.log(concat);


const obj1 = {
    fistname : 'akshad',
    lastname : 'gujarkar'
}
const obj2 = {
    address : 'hudkeshwar',
    location : 'sh town'
}
const obj3 = {...obj1,...obj2}
console.log('object 3 created using obj1 , obj2 ',  obj3);


const array2 = [1,2,3,4,5,6,7,8,9,20]
function add(){
    let sum = 0
    for(let i = 0; i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}

console.log(add(...array2));

const str = 'akshad'
const str2 = 'gujarkar'
const str3 = {...str}
console.log(str3);//spread each and every alphabet a k s h 