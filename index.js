function factorial(numbers) {
  if (numbers === 0) {
    return 1;
  }
  return numbers * factorial(--numbers);
}

// driver code
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120


// 5:37