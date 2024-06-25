setTimeout('console.log("my name is akshad")',2000) //code , miliseconds

//higher order function
setTimeout(`console.log('my name is akshad');
   console.log('i am studying at anjuman polytechnic' );`,200)



// let id = setTimeout() return the timer id 
// from that id we can clearTimeout(id) this will clear the remaining setTimeout code . it will not execute  


const timer1 = setTimeout('console.log("2 second delay ")',2000)
const timer2 = setTimeout('console.log("4 second delay")',4000)
const timer3 = setTimeout('console.log("6 second delay")',6000)

clearTimeout(timer1); //from this func the setTimeout function with respect to that id will not execute

console.log(timer1+" "+timer2+" "+timer3);

function a(b){
    console.dir(b);

}


const timer4 = setTimeout(a,7000)


//return timer id
const interval = setInterval('console.log("2 second delay ")',2000)

// continuous execute by time specified till the clearInterval() gets called then stop the execution 

clearInterval(interval)


setTimeout(function(){
    console.log('hi 1 asynchronous code');
},2000)

console.log('synchronous code');





