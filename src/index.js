module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero';
    }
  let hundreds = Math.floor(number/100);
  let tens = Math.floor(((number-(hundreds*100))/10));
  let ones = number - hundreds*100 - tens*10;
  let strHundreds = hundredIntoString(hundreds);
  if (hundreds != 0 && (tens != 0 || ones != 0)) {
    strHundreds = strHundreds + ' ';
  }
  let strTens = (tens != 1) ? tensIntoString(tens) : teensIntoString(tens*10+ones);
  if (tens != 0 && ones != 0 && tens != 1) {
    strTens = strTens + ' ';
  }
  let strOnes = (tens != 1) ? digitIntoString(ones) : '';
  return (strHundreds + strTens + strOnes);
}
function hundredIntoString(digit) {
    return (digit == 1) ? 'one hundred' : 
    (digit == 2) ? 'two hundred' : 
    (digit == 3) ? 'three hundred' : 
    (digit == 4) ? 'four hundred' : 
    (digit == 5) ? 'five hundred' : 
    (digit == 6) ? 'six hundred' : 
    (digit == 7) ? 'seven hundred' : 
    (digit == 8) ? 'eight hundred' : 
    (digit == 9) ? 'nine hundred' : '';
}
function tensIntoString(digit) {
    return (digit == 2) ? 'twenty' : 
    (digit == 3) ? 'thirty' : 
    (digit == 4) ? 'forty' : 
    (digit == 5) ? 'fifty' : 
    (digit == 6) ? 'sixty' : 
    (digit == 7) ? 'seventy' : 
    (digit == 8) ? 'eighty' : 
    (digit == 9) ? 'ninety' : '';
}
function digitIntoString(digit) {
    return (digit == 1) ? 'one' : 
    (digit == 2) ? 'two' : 
    (digit == 3) ? 'three' : 
    (digit == 4) ? 'four' : 
    (digit == 5) ? 'five' : 
    (digit == 6) ? 'six' : 
    (digit == 7) ? 'seven' : 
    (digit == 8) ? 'eight' : 
    (digit == 9) ? 'nine' : '';
}
function teensIntoString(digit) {
    return (digit == 10) ? 'ten' :
    (digit == 11) ? 'eleven' : 
    (digit == 12) ? 'twelve' : 
    (digit == 13) ? 'thirteen' : 
    (digit == 14) ? 'fourteen' : 
    (digit == 15) ? 'fifteen' : 
    (digit == 16) ? 'sixteen' : 
    (digit == 17) ? 'seventeen' : 
    (digit == 18) ? 'eighteen' : 'nineteen';
}