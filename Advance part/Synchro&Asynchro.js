
// const button = document.querySelector('button')
// const image = document.querySelector('img')

// button.addEventListener('click',(event)=>{
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then((respone) => respone.json())
//     .then((json) => {
//         image.src = json.message
//     })
// })

// setTimeout(() => {
//     console.log('Web Api');
// }, 2000);


// blocking the javascript main thread

const startTime = Data.now()
let currentTime = startTime 
      

    // futureTime > currentTime
while(startTime + 2000 > currentTime){
     
    currentTime = Date.now()
}