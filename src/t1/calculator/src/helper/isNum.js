const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;

export default function isNumeric(str) {
  return numeric.test(str);
}
