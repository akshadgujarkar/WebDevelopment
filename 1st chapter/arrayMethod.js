const even = [0,2,4,6,8]
even.push(10)
console.log(even);
console.log(even.pop())
console.log(even);
console.log(even.shift()); //remove element from starting and shift index left side
console.log(even.shift()); //pop()
console.log(even);


const array = [1,2,3,4,5]
console.log(array);
array.shift();
console.log(array);
array.unshift(10) //push()
console.log(array);


const a1 = ['akshad' , 'varsha']
const a2 = ['arya' , 'ishwar']
console.log(a1.concat(a2));
console.log(a1);
console.log(a2);
  const newArray = a1.concat(a2)
  console.log(newArray);
  console.log(a1.indexOf('akshad'));
  console.log(a1.indexOf('varsha')); //if doesn't exist then will return -1




  let str = 'akshad'
  console.log(str[2]);
  console.log(str.indexOf('d'));
  console.log(str.charAt(4));


  const fruits =['pineapple','banana','water melon','kiwi']
console.log(fruits)
const isPresent = fruits.includes('kiwi')
if (isPresent===true) {
  console.log('fruit is present');
} else {
  console.log('fruit is not present');
}

const reverse  = ['1','2','3','4','5']
console.log(reverse);
console.log(reverse.reverse());
reverse.sort() //normal sort
console.log(reverse);//sorted alphabetically

//slice 
const original = ['elephant','lion','cow','rat']
const newOriginal1 = original.slice();
console.log(newOriginal1);
const newOriginal2 = original.slice(2);
console.log(newOriginal2);
const newOriginal3 = original.slice(0,2)
console.log(newOriginal3);
console.log(original);

const a = ['dog','cat','lion','rat','elephant','cow','tiger']
console.log(a.splice(2,1,'sdf')); //return new array modifies old array
console.log(a);

console.log(a.splice(0,1));
console.log(a);