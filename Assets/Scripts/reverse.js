function reverse(strIn) {
  const tempArr = [];
  for (let i = strIn.length - 1; i >= 0; i--) {
    tempArr.push(strIn[i]);
  }
  return tempArr.join('');
}

module.exports = reverse;
