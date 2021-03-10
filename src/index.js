module.exports = function toReadable (number) {
  let unit = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
  };

  let tens = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };

  if (number == 0) {
      return ('zero');
  }

  if (number < 20) {
      return (unit[number]);
  }

  else if (number < 100) {
      number = String(number);
      if (number % 10 == 0) {
          return (tens[number]); 
      } else {
          return (tens[Math.floor(number/10)* 10] + ' ' + unit[number%10]);
      }
  }

  else if (number < 1000) {
    number = String(number);
    if (number % 100 == 0) {
        return (unit[number/100] + ' hundred'); 
    } else if (number % 100 < 20){
        return (unit[Math.floor(number/100)] + ' hundred ' + unit[number % 100]);
    } else if (number[String(number).length - 1] == '0'){
        return (unit[Math.floor(number/100)] + ' hundred ' + tens[Math.floor(number%100)]);
    } else {
        return (unit[Math.floor(number/100)] + ' hundred ' + tens[String(number)[1] * 10] + ' ' + unit[String(number)[2]]);
    }
}
}
