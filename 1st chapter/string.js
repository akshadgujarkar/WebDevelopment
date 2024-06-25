const str = 'akshad'
console.log(str.length);
console.log(str.toUpperCase())
console.log(str);
const faltumess = ' hi , i am akshad ';
console.log(faltumess);
const trim_mess = faltumess.trim().toLowerCase().toUpperCase();
console.log(trim_mess);

const trim_start = faltumess.trimStart();
console.log(trim_start);
const trim_end = faltumess.trimEnd();
console.log(trim_end);


const longString = 'My name is akshad gujarkar and i love to coding in java , javascript '
console.log(longString.includes('akshad'));
console.log(typeof longString.includes('coding'))

const string = 'adfj'
if(longString.includes(string)) {
    console.log('String present');
}
else{
    console.log('String absent');
}

console.log(string.indexOf('j'));
console.log(string[2]);

console.log(longString.replace('akshad' , 'arya '));

console.log(longString.replaceAll('a' , 'A '));
const str1 = 'akshad '
const str2 = 'gujarkar'
const concat = str1.concat(str2)
const concat2 = str1.concat(' ', str2)
console.log(concat);
console.log(concat2);

const lastFourDigits = '78932'
console.log(lastFourDigits.length);
// console.log('***************'+lastFourDigits);
console.log(lastFourDigits.padStart(10,'*'));
console.log(lastFourDigits.padEnd(10,'&'));

console.log(str1.charAt(5));
if(str1.charAt(5).match('f'))
    {
        console.log('Character found');
    }
    else{
        console.log('not found');
    }
console.log(str1.charCodeAt(0)); // return aski value

console.log(longString.split(' ')[1]);//split the words and store in array