const span = document.querySelector(".name-tag");

span.innerText = localStorage.Username;

document.body.children[1].append(
  (document.createElement(
    "p"
  ).innerHTML = `The password of this username is ${localStorage.password}`)
);
//best practice is localStorage.getItem('password')

const input = document.querySelector("input");

// input.addEventListener('input',(event)=>{
//    localStorage.input = event.target.value
// })

// document.body.append(document.createElement('p').innerText = localStorage.input)

input.addEventListener("input", (event) => {
  localStorage.setItem("input", event.target.value);
});

const age = document.querySelector("#age");
const displayAge = document.querySelector("#displayAge");

age.addEventListener("input", (event) => {
  localStorage.setItem("age", event.target.value);
  displayAge.innerText = `my age is ${localStorage.getItem("age")}`;
});
// document.body.append(`Age before the page reload ${localStorage.getItem('age')}`)

// to convert object into string we use
// JSON.stringify(object)
// JSON.parse(string) -> convert into object

// to save object in local storage

const objname = document.querySelector("#objname");
const para = document.querySelector("obj");
const objage = document.querySelector("#objage");
const nameobj = document.querySelector(".objname");
const age1 = document.querySelector(".objage");

// const MyData = {
//    name : '',
//    age : ''
// }
const MyData = JSON.parse(localStorage.getItem("MyData")) || {};

if (MyData.name && MyData.age1) {
  nameobj.innerText = MyData.name;
  age1.innerText = MyData.age1;
}

objname.addEventListener("input", (event) => {
  MyData.name = event.target.value;
  localStorage.setItem("MyData", JSON.stringify(MyData));
  name.innerText = event.target.value;
});

objage.addEventListener("input", (event) => {
  MyData.age = event.target.value;
  localStorage.setItem("MyData", JSON.stringify(MyData));
  age1.innerText = event.target.value;
});


// localStorage.clear() this will clear all the data present in the localStorage 
// localStorage.removeItem('itemName')