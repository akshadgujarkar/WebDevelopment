const object = {         //different address
    firstname : 'akshad',
    lastname : 'gujarkar',
    age :  '18',
    education : 'polytechnic',
    city : 'pune',
} // key  value ->both are called key value pairs 
const object2 = {          //different address
    firstname : 'akshad',
    lastname : 'gujarkar',
    age :  '18',
    education : 'polytechnic',
    city : 'pune',
} // key  value ->both are called key value pairs 

const str1 =''//same address
const str2 =''//same address

const myName = 'akshad'

const user1 ={
    'firstname' : 'adarsh' //both are same
}
const user2 ={
    firstname : 'akash',  //both are same
    akshad : 'replace value'
}
console.log(user1);
console.log(user2);
console.log(user1.firstname); //1st method
console.log(user2.firstname);
console.log(user1['firstname']); //2nd method
console.log(user2[myName]); //variable
console.log(user1['first' + 'name']);

const obj ={
    firstname : 'akshad',
    lastname : 'gujarkar'
 }
// obj.age undefined
obj.age = 24
obj['is-student']=true
obj.isStudent = true

const obj2 = {
    firstname: 'akshad',
    lastname : 'gujarkar',
    address : {             //nesting of object can be done
        city : 'banglore',  //address will be created different location
        native : 'nagpur',
        collage : 'viit'
        //adding another key in nested object

    }
}
console.log(obj2.address);
console.log(obj2);
console.log(obj2.address.city); //object inside object
console.log(obj2.address.mother = 'varsha'); //added key to nested object
