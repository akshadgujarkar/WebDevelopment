const fruits = ['apple','banana','grapes','Dates']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
console.log(fruits[fruits.length-1]='russia');
console.log(fruits);

const str='akshad'
console.log(str.length);
console.log(typeof fruits);//object
fruits[0] = 'pineapple'
console.log(fruits);

const objArray = [{name : 'akshad'},{lastname : 'gujarkar'}]
console.log(objArray);

//we can also make array of objects 
const objArray2 = [ 
    {
        name : 'arya',
        lastname:'gujarkar'
    },
    {
        location : 'nagpur',
        pincode : '234234'
    }
]

console.log(objArray2.length);
console.log(objArray2);

const array = [1,3,553,5,86,1,8,[943,234,41]]
console.log(array);

array[100] = 343; //empty spaces betwn these elements assigns undefined datatype to it.
console.log(array);


const a = [23,6,602,1,18,6175,1,6]
a.push(45)
a.push(21)
a.push(775)

console.log(a);
a.pop() //delete last index element
console.log(a);


const newArray = []
console.log(newArray);
newArray.firstname = 'akshad'
console.log(newArray);
console.log(newArray.length);// length = 0 #jugad se insert kiya

// const obj = {}
// obj['name']='nilanshu'
//  console.log(obj)
// // delete obj['name']
// delete obj.name
// console.log(obj);

const multiArray = [
                      ['akshad','nagpur'],
                      ['fuzail','devoli']
                ]
console.log(multiArray[0][1]);


const tictacto = [
                   ['X',null,null],
                   [null,null,'O'],
                   ['O',null,'X']
]
console.log(tictacto[0][1]);







