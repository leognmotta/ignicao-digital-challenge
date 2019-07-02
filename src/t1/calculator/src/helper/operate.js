export default function operate(numOne, numTwo, operation) {
  const one = numOne || '0';
  const two = numTwo || (operation === '/' || operation === '*' ? '1' : '0');

  console.log({
    one,
    two,
    operation
  });
}
