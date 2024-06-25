const color = ['red','green','yellow','pink','black']

//destructuring array
const [color1,color2,color3,color4,color5] = color
//only one element wanna access
const [,,,c4] = color
const {0 : col} = color // index and element name 

const user = {
    name : 'akshad',
    age : 12,
    address : {
        city : 'pune',
        state : 'karnataka'
    },
}
//destructure object
const {name , age} = user
// const {name : username  , age} = user
// const {address : {city}} = user
const {address} = user
const {city} = address
console.log(city);

// function func(userObj){
//     console.log(userObj);
// }
// func(user)

function func({age , address : {city}}){
    console.log('age ' ,age);
    console.log('city' , city);
}
func(user)