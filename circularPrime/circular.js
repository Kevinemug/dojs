function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  
  return true;
}

function getCircularPermutations(num) {
  let numStr = num.toString();
  let circularPermutations = [numStr];
  
  for (let i = 1; i < numStr.length; i++) {
    numStr = numStr.slice(1) + numStr[0];
    circularPermutations.push(numStr);
  }
  
  return circularPermutations.map(Number);
}

function findCircularPrimes() {
  const inputElement = document.getElementById("numberInput");
  const num = parseInt(inputElement.value);

  if (isNaN(num) || num < 100 || num > 100000) {
    alert("Please enter a valid number between 100 and 100,000.");
    return;
  }

  let count = 0;
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      const circularPermutations = getCircularPermutations(i);
      if (circularPermutations.every(isPrime)) {
        count++;
      }
    }
  }

  const resultElement = document.getElementById("result");
  resultElement.textContent = `The number of circular primes below ${num} is ${count}.`;
}
