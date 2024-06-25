const button = document.querySelector('#cards')

const container = document.querySelector('.container')



let number = 1
button.addEventListener('click',(event)=>{
   const card = document.createElement('div')
   card.classList.add('card')
   card.innerText = `Box ${number++}`

//    card.addEventListener('click',(event)=>{

//     card.remove()

//    })
   container.appendChild(card)
    
})

container.addEventListener('click',(event)=>{

    // console.log(event.target);
    // const r = event.target
    // r.remove()
    if(event.target != container){
        event.target.remove()
    }
})