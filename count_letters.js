function countLetters(str) {
  var letter_stat = {};
  var len = str.length - 1;

  while(len >= 0) {
    let letter = str[len];
    len--
    if(letter === ' ') { continue }
    letter_stat[letter] ? letter_stat[letter]++ : letter_stat[letter] = 1;
  }
  return letter_stat
}

console.log(countLetters("lighthouse in the house"));