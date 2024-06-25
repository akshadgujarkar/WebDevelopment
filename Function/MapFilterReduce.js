const students = ['akshad','arya','fuzail','talish','ayan']

const upperCase = students.map((students, index, array)=>{
    console.log(students, index);
    console.log(array);
    return students.toUpperCase()
  })
//return new array does not mutable original array
 console.log(upperCase);

const fruits = ['apple','pineapple','kiwi','sweden']

console.log(fruits.forEach((fruit)=>{
    console.log(fruit.toUpperCase());
}));

const madam = ['akshad','arya','fuzail','talish','ayan']
const condition1 = madam.filter((madam,index)=>{
           console.log(`run times : ${index+1}`);
           return madam.length <=5
})

console.log(condition1);

const month = ['january','february','march','april','may','Manish']

const condition2 = month.filter((month,index,array)=>{
    console.log( month.toLowerCase().includes('m')); //return boolean
    return month.toLowerCase().includes('m')
})

console.log(condition2); // return filter array elements


// const condition3 = month.map((month,index,array)=>{
//     console.log( month.toLowerCase().includes('m')); //return boolean
//     return month.toLowerCase().includes('m')
// })
// console.log(condition3); return boolean result of the method inclues


const stud = [
    {
        name : 'akshad',
        age : 18
    },
    {
        name : 'ram',
        age : 34
    },
    {
        name : 'shan',
        age : 16
    },
    {
        name : 'amhir',
        age : 12
    },
    {
        name : 'aza',
        age : 19
    }
]

const condition4 = stud.filter((student)=>{
    return student.age >= 18 
})
console.log(condition4);


const condition5 = stud.filter((student)=>{
    return student.age >= 18 
}).map((student)=>{
      return student.name
})

console.log('condition 5 array : ');
console.log(condition5);

const condition6 = stud.filter((student)=>{
    return student.age >= 18 
}).map((student)=>{
      return student.name
}).filter((student)=>{
    return student.charAt(0).toLowerCase().match('a')
})

console.log('condition 6 array : ');
console.log(condition6);

//reduce
const num = [1,2,3]
 
num.reduce((accumulator,currentValue,index,array)=>{
   console.log(index , currentValue);
})

const reduce = num.reduce((accumulator,currentValue,index,array)=>{
   console.log(accumulator);
   return accumulator + currentValue
 },10)  //reduce(callback,initalValue = accumulator )
 //return last element value operation with accumulator + currentElement
console.log(reduce);

