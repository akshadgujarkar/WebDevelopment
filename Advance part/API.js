
// POSTMAN / THUNDER client

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))

const button = document.querySelector('button')
const image = document.querySelector('img')

button.addEventListener('click',(event)=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((respone) => respone.json())
    .then((json) => {
        image.src = json.message
    })
})

// we use this method in older days output is same as above code
button.addEventListener('click',(event)=>{
    const xhr = new XMLHttpRequest()
    console.log(xhr);
    xhr.responseType = 'json' // convert the respone into json format
    // this event will fire when data is loaded or we get actual data from this api
    xhr.addEventListener('load',(event)=>{
        console.log(xhr.response); // will return the respone in form of string
        console.log(JSON.parse(xhr.response)); // convert string into json object
        image.src = xhr.response.message 
    })



    xhr.open('GET','https://dog.ceo/api/breeds/image/random')
    xhr.send()


})


// by default this is asynchronous then by passing 2nd arg  false 
// then it will converted into synchronous code after doing this 
// javascript main engine will fetch the data otherwise before
// data fetching is done by browser in individual thread 
// xhr.open('GET','https://dog.ceo/api/breeds/image/random',false)