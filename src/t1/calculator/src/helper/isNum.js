const numericNoSymbols = /^[0-9]+$/;

export default function isNumeric(str) {
  return numericNoSymbols.test(str);
}
