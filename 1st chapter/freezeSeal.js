document.write('akshad')

const user ={
    firstname : 'akshad',
    lastname : 'gujarkar',
    pata : {
        city : 'banglore',
        pincode : 34243,
        state : 'karnataka',
        moredeatils : {
            population : 23445234,
            area : '394 sq km',
        }
    },
    age : '23',
    isGraduate : false
}
 
//const user = {} leads to error can't assign new object to constant variable
console.log(user.MobileNumber=232323);

let obj1 = {
    firstname : 'akshad',
    lastname : 'gujarkar',
    address : {
        pincode : 43423,
        location : 'swagat nagar',

    },
    mother : 'varsha'
}
Object.seal(obj1) //can't update the keyvalue means strictly prohibited to add or delete key values
console.log(obj1.firstname='arya'); //after Object.seal we can't add but still change the key values present in it.
//to avoid this also we use Object.freeze();

Object.freeze(obj1) //can't change value or modify

//to check whether this key is present or not 
let isPresent = 'MobileNumber' in obj1
console.log('key is present ' + isPresent);
isPresent = 'firstname' in obj1
console.log('key is present ' + isPresent);


console.log(obj1);
obj1 = {} //successfully assign the new object value  bcoz we declare it by let 
console.log(obj1);
console.log(obj1.name='akshad');

console.log(delete obj1.name);  //return true successfully deleted