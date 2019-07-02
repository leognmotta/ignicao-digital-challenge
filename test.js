const numberTwo = null;
let operation = '+';
const two = numberTwo || (operation === '/' || operation === 'x' ? '1' : '0');

console.log(two);
