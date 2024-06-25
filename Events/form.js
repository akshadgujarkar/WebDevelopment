const username = document.querySelector("#username");
const paragraph = document.querySelector("p");

username.addEventListener("input", (event) => {
  //   console.log(event);
  //   console.log(event.target.value);

  paragraph.innerText = event.target.value;
});

const password = document.querySelector("#password");

password.addEventListener("change", (event) => {
  console.log(
    "change event fired when we clicked outside the input box :- ",
    event.target.value
  );
});

const email = document.querySelector("#email");

email.addEventListener("focus", (event) => {
  console.log(event);
  console.log(event.target.placeholder);
  console.log("focused on input focus event box");
});

email.addEventListener("blur", (event) => {
  console.log("blur event of focus box"); //clicked anywhere outside the focus box
});

const form = document.querySelector('form')

//only used this submit event in the  form element in html
form.addEventListener('submit',(event)=>{

    event.preventDefault()
    // console.log(event.target);
    // console.log(event.currentTarget);
    const myform = new FormData(form)
    for(const p of myform.entries()){
        console.log(p);
    }
})
