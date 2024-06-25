const heading = document.querySelector('h1')

heading.addEventListener('click',(event)=>{
    console.log(event);
    console.log('heading is clicked');
})

const mDown = document.querySelector('h2')

mDown.addEventListener('mousedown',(event)=>{
    console.log(event);
    console.log('mouse down');
})

mDown.addEventListener('mouseup',(event)=>{
    console.log(event);
    console.log('mouse up');
})


mDown.addEventListener('mouseenter',(event)=>{
    console.log(event);
    console.log('mouse enter event');
})


mDown.addEventListener('mouseleave',(event)=>{
    console.log(event);
    console.log('mouse leave ');
})


mDown.addEventListener('mousemove',(event)=>{
    console.log(event);
    console.log('mouse move');
})


mDown.addEventListener('wheel',(event)=>{
    console.log(event);
    console.log('wheel event ');
})

document.addEventListener('scroll',(event)=>{

    console.log('page scroll');

})


mDown.addEventListener('touchstart',(event)=>{
    console.log(event);
    console.log('touch event on mobile');
})


mDown.addEventListener('touchmove',(event)=>{
    console.log(event);
    console.log('touch  move event on mobile');
})



heading.addEventListener('drag',(event)=>{

    console.log('h1 is dragging');
})

// instead of mousemove or touchmove we use pointermove
mDown.addEventListener('pointermove',(event)=>{
    console.log(event);
    console.log('pointer move event');
})

mDown.addEventListener('pointerenter',(event)=>{
    console.log(event);
    console.log('pointer move event');
})

mDown.addEventListener('pointerleave',(event)=>{
    console.log(event);
    console.log('pointer move event');
})
