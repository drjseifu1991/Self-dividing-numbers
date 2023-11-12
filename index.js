/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const answer = []
  for (let i = left; i <= right; i++) {
      if( isSelfDividingNumber(i)) {
          answer.push(i)
      } 
  }
  return answer
};

var isSelfDividingNumber = function(num) {
  let temp = num;

  while (temp > 0) {
      const digit = temp % 10

      if ( digit === 0 || num % digit !== 0) {
          return false
      }

      temp = Math.floor( temp / 10)

  }

  return true
}

console.log(selfDividingNumbers(1, 100))