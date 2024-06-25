// basically promise has 3 states
// 1) resolve
// 2) pending
// 3) rejected
const promiseState1 = new Promise((resolve, reject) => {
    resolve('Akshad Gujarkar [fulfilled]')
})



const promiseState2 = new Promise((resolve, reject) => {
    // reject({name : 'akshad'})
    reject('promise rejected')
})

const button = document.querySelector('button')

const btnPromise = new Promise((resolve,reject)=>{

    button.addEventListener('click',(event)=>{
         setTimeout(()=>{

            resolve("Promise is resolved by clicking button")
            console.log(btnPromise); // status fulfilled
         },3000)
        
    })
})

//( then ) is a higher order function also accepts the callback function 
btnPromise.then(()=>{

})

// console.log(btnPromise); // status pending