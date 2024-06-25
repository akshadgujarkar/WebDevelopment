const username = 'akshad'
const userAge = 23

function add(){
    const x = 5
    const y = 4
    console.log(x+y);
}
// console.log(x);


function root()
{
    const rname = 'akshad'
    console.log(`root function ${rname}`);

    function parent(){
        
        const pname = 'akshadChild'
        console.log(`parent function ${pname}`);
        console.log(rname);
      

        child()
        function child()
        {
            const cname = 'akshadChild'
            console.log(`child function ${cname}`);
            console.log(rname);
            console.log(pname);

        }
    }
    parent()

}
 
root()





















