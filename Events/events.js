const intro = function(){
    console.log('my name is akshad gujarkar');
}
const container = document.querySelector('.container')

const boldText = document.querySelector('b')
// boldText.onclick = intro using this property we can add only single click event 
// but in addEventListener we can add multiple click events
// boldText.addEventListener('click',intro)
boldText.addEventListener('click',()=>{
    console.log('using arrow function callback');
})
let number = 1
const card = document.querySelector('.box')
card.addEventListener('click',()=>{
    const cloneCard = card.cloneNode(true) // in clone node it implicitly add original classes to the clone element
    cloneCard.textContent = `box ${number++}` 
  
    container.append(cloneCard)
})