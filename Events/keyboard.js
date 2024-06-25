const heading = document.querySelector('h1')

// generally we used on window object
heading.addEventListener('keypress',(event)=>{
    console.log('key press');
    console.log(event);
console.log('value : ' , event.key);
console.log(event.code);
})

// when we release the key on keyboard
window.addEventListener('keyup',(event)=>{
    console.log('key up');
    console.log(event);
console.log('value : ' , event.key);
console.log(event.code);
})

window.addEventListener('keydown',(event)=>{
    console.log('key down');
    console.log(event);
console.log('value : ' , event.key);
console.log(event.code);
})
