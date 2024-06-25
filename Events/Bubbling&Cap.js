const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const grey = document.querySelector('.grey')

green.addEventListener('click',(event)=>{

    event.stopPropagation();
    console.log('green clicked');
})

pink.addEventListener('click',(event)=>{

    event.stopPropagation();
    console.log('pink clicked');
},{once : true})

grey.addEventListener('click',(event)=>{

    event.stopPropagation();
    console.log('grey clicked');
},{capture:true , once: true})
// capture true means it will capture the from window -> parent -> child -> nth child

