function caesar(shift, str) {
  let range = 26;
  let min;
  let cipherMsg = '';

  shift %= range;
  if (shift < 0) shift = range + shift;

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/g)) {
      min = 97;
      cipherMsg += String.fromCharCode(
        (parseInt(str.charCodeAt(i) + shift - min) % range) + min,
      );
    } else if (str[i].match(/[A-Z]/g)) {
      min = 65;
      cipherMsg += String.fromCharCode(
        (parseInt(str.charCodeAt(i) + shift - min) % range) + min,
      );
    } else {
      cipherMsg += str[i];
    }
  }
  return cipherMsg;
}

console.log(caesar('hello world', 5));

module.exports = caesar;
