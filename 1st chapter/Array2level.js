// Shallow copy creates only single new address 1st level copy 
// Object.assign(obj2,obj1)
//  const obj2 = {...obj1}
const array = ['grapes','mango','sitafal']
let newArray = array
newArray.push('dates')
newArray.push('water melon')
console.log(newArray);//changes made to this one also leads to change
console.log(array);//other array 
 
const obj = {
    firstname : 'akshad',
    lastname : 'gujarkar'
}
let obj2 = obj //both the variable's address are same

obj2.lastname = 'roy'
console.log(obj2)
console.log(obj);//changes in both the obj but i changed in only one

const object = {
    location : 'nagpur',
    pincode : 34241
}
 
// let object2 = object  don't do this 
let object2 = {}

Object.assign(object2 , object)  //now addresses are not same

const oldObject = {
    'akshad' : 'polytechnic',
    'arya' : 'pharmacy'
}
// let newObject = oldObject
let newObject = {...oldObject} //spread operator
console.log(newObject);

// const string1 = 'akshad'
// let string2 = {...string1}
// console.log(string2);



console.log(object2);
object2.firstname = 'akshad'
console.log(object2); //different content
console.log(object); // different content

// const string = 'akshad'
// let temp = string
// temp += 'gujarkar' //now the address are different bcoz of new string is added

const janwar = ['kutra','sasa','komadi']
const animal = [].concat(janwar)
// const animal = janwar.slice();
console.log(animal);
animal.shift()
animal.unshift('goat')
console.log(animal);


