const button = document.querySelector('#cards')

const container = document.querySelector('.container')



let number = 1
button.addEventListener('click',(event)=>{
   const card = document.createElement('div')
   card.classList.add('card')
   card.innerText = `Box ${number++}`
   container.appendChild(card)
    
})

let count = 0 


const intervalId = setInterval(()=>{
    count++
    if(count === 10){
        clearInterval(intervalId)
    }
  button.click()
},1000)

const input = document.querySelector('input')


input.focus()
console.log('focus on input element');


setTimeout(() => {
  input.blur()
  console.log('blur on input element');
},4320);

const form = document.querySelector('form')

// setTimeout(() => {
//   form.submit()
// }, 1000);

setTimeout(() => {
  form.reset()
}, 2000);