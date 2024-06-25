// function add(...number){
//     let sum = 0
//     console.log(number);//forms a array from argument list
//     for(let i = 0 ; i<number.length ; i++){

//         sum += number[i]
//     }
//     return sum
// }
// const result = add(1,4,23)
// console.log(result);

function add(...number){
    return  number.reduce((accumulator, Element)=>{
       return accumulator + Element
    },0)
}
array = [13,557,3,73,23,846,567]
const result = add(...array)
console.log(result);