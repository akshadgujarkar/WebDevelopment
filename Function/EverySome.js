const number = [12, 46, 9, 23, 79, 31];

const answer1 = number.some((element, index, array) => {
  console.log(element);
  //no return statment then return false
});
console.log(answer1); //false

const answer2 = number.some((element, index, array) => {
  //return falsy value then return false if true is present the return all time true;

  return "any thing";
});
console.log(answer2);

const answer3 = number.some((element, index, array) => {
  //return falsy value then return false if true is present the return all time true;

  return element >= 25;
});
console.log(answer3);

const even = [1, 2, 4, 6, 8, 10];
const odd = even.some((element) => {
  if (element % 2 != 0) {
    console.log(`odd element present in array is ${element}`);

    return element % 2 != 0;
  }
});

console.log(odd);


//every function is exactly opposite of the some function 
// when every value return true then it will return true like a logical AND 
// in some function return true when any element of the array return true

// some function check for the true value and return true if present once.
// every function check for the false value and return false if present once.
// if false is not present then it will return true in that case.
