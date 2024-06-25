
let i = 1
while(i<=10){
    console.log('akshad');
    i++
}

let j = 0
const array = ['akshad','arya','ishwar','varsha']
while(j <=array.length-1){
    console.log(`${j+1}. index element ${array[j]}`);
    array[j] = array[j] +  ' programmer'
    j++

}


const friends = ['akshad' , 'harshu' ,'archit','pusatkar']
 let k = 0
while(k<=friends.length-1){
    //console.log(`${k} index element ${friends[k]}`);
    console.log(friends[k].concat(' programmer') ); 
    k++
}


for(let w = 1; w<=10 ; w++){
    console.log(`${w} times using for loop`);
}
let z = 0
do{
    console.log(`${z} times using do while`);
     z++
}while(z<=5)



const fruits = ['apple','pineapple','kiwi','sweden']
for(const fruit of fruits){
    console.log(fruit);
}
//higher order and required callback arrow function
console.log(fruits.forEach((frut)=>{
    console.log(frut);
}));

const person = {
    firstname : 'akshad',
    lastname : 'gujarkar',
    age : '50',
    eyeColor : 'black',
    city : 'Pune'
}
// const values = Object.values(person) return array with only object key values [values , values ]
// const entries = Object.entries(person) return 2d array object keyvalue paris  [ [key : value] , [key : value] ] 
const key = Object.keys(person) // [key , key]
for(const keys of person){
    console.log(person[keys]);
}

// for(const key in person){
//     console.log(key , person[key]);
   
// }



