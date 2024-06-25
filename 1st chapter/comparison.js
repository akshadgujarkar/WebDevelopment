const age = 43;
const votingAge = 18;

if(age>=votingAge){
    console.log('age is above voting category ');
}
else{
    console.log('age is below voting category');
}
const str1 = 'akshad'
const str2 = 'gujarkar'
console.log(str1===str2); //strictly check type

const num1 = '12'
const num2 = 12
console.log(num1==num2);//true
console.log(num1===num2);//false check type also
console.log(parseInt(num1)===num2);//true
// ==
// ===
// !=
// !==

// >=
// <=
const math_marks = 55
const eng_marks = 34
if((math_marks>40) && (eng_marks>40)){
    console.log('student is passed');
}
else{
    console.log('student is failed');
}

const history = 45
const geography = 34
if(history>=40 || geography>=40){
    console.log('student is passed');
}
else {
    console.log('student is failed')
}

const HumanAge = prompt(`Enter your age `)
if(HumanAge >=18){
    console.log('you are eligible to vote');
}
else{
    console.log('you are not eligible to vote');
}

const gender = prompt('enter your gender')
if(gender.match('male')){
    console.log("he");
}
else{
    console.log('she');
}