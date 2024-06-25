const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");

const newcard = card.cloneNode();
container.appendChild(h1)
container.append(h1)
container.append(`my name is akshad and i loved to do coding and all stuffs   `)
// in above two method append method can add anything at the last of the element content present in it but in appendChild method only valid add html element at the last


// first we create node in our html doc then add to the container last content using appendChild(node)
const Appendnode = document.createTextNode("appended node")
container.appendChild(Appendnode)




for (let i = 1; i < 100; i++) {
  newcard.innerText = i + 1;
  container.appendChild(newcard.cloneNode(true));
}



//  document.body.childNodes[3].data = 'arya gujarkar'
