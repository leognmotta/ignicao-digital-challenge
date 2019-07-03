export default function operate(numOne, numTwo, operation) {
  const one = Number(numOne) || 0;
  const two = numTwo ? Number(numTwo) : operation === '/' || operation === '*' ? 1 : 0;

  if (operation === '+') {
    return String(one + two);
  }

  if (operation === '-') {
    return String(one - two);
  }

  if (operation === '*') {
    return String(one * two);
  }

  if (operation === '/') {
    if (two === 0) {
      alert('Could not divide by 0');
      return '0';
    } else {
      return String(one / two);
    }
  }
}
