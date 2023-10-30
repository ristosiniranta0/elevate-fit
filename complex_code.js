/*
filename: complex_code.js

This code demonstrates a complex and sophisticated algorithm for finding prime numbers using the Sieve of Eratosthenes method in JavaScript.
*/

// Function to generate prime numbers up to a given limit using the Sieve of Eratosthenes method
function generatePrimes(limit) {
  // Create a boolean array "isPrime[0..limit]" and initialize all entries as true.
  let isPrime = new Array(limit + 1).fill(true);
  
  // 0 and 1 are not prime numbers
  isPrime[0] = isPrime[1] = false;

  // Run the Sieve of Eratosthenes algorithm
  for (let p = 2; p * p <= limit; p++) {
    // If isPrime[p] is not changed, then it is a prime number
    if (isPrime[p]) {
      // Update all multiples of p to false as they are not prime except p itself
      for (let i = p * p; i <= limit; i += p) {
        isPrime[i] = false;
      }
    }
  }

  // Create an array to store the prime numbers
  let primes = [];

  // Append the prime numbers to the "primes" array
  for (let p = 2; p <= limit; p++) {
    if (isPrime[p]) {
      primes.push(p);
    }
  }

  return primes;
}

// Call the generatePrimes function with a limit of 1000 and store the result
let primeNumbers = generatePrimes(1000);

// Print the prime numbers to the console
console.log(primeNumbers);