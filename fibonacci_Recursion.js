function fib(n) {
    // Step 1: Define the base case(s) here.
    if (n === 0) return 0;
    if (n === 1) return 1;
    // Hint: What is the value of Fibonacci(0) and Fibonacci(1)?
    
    return fib(n - 1) + fib(n - 2);
}
    console.log(fib(5));
    console.log(fib(10));
    // Hint: Return the sum of Fibonacci(n-1) and Fibonacci(n-2).
