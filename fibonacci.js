// 1.Write a simple application that accepts a value (integer) and returns the fibonacci value at that index of the value provided.
// The application should be performant at scale to handle larger numbers without slowing down exponentially.


const POSITION = 70;
// Method 1
// Generic method to create fibnoacci numbers and return the value of given index
// Generate N number of Fibnoacci numbers
function listFibonacci(n) {
    // declare the array starting with the first 2 values of the fibonacci sequence
    // starting at array index 1, and push current index + previous index to the array
    for (var fibonacci = [0, 1], i = 1; i < n; i++) 
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  
    return {
        index: n,
        value: fibonacci[n],
        fibonacci
    }
}
console.log(listFibonacci(POSITION))
/*
Output:
{
    index: 70,
    value: 190392490709135,
    fibonacci: [
                   0,               1,               1,              2,
                   3,               5,               8,             13,
                  21,              34,              55,             89,
                 144,             233,             377,            610,
                 987,            1597,            2584,           4181,
                6765,           10946,           17711,          28657,
               46368,           75025,          121393,         196418,
              317811,          514229,          832040,        1346269,
             2178309,         3524578,         5702887,        9227465,
            14930352,        24157817,        39088169,       63245986,
           102334155,       165580141,       267914296,      433494437,
           701408733,      1134903170,      1836311903,     2971215073,
          4807526976,      7778742049,     12586269025,    20365011074,
         32951280099,     53316291173,     86267571272,   139583862445,
        225851433717,    365435296162,    591286729879,   956722026041,
       1548008755920,   2504730781961,   4052739537881,  6557470319842,
      10610209857723,  17167680177565,  27777890035288, 44945570212853,
      72723460248141, 117669030460994, 190392490709135
    ]
}
*/

// Method 2 (Most efficient but has limited upto ~70 index after that there will be floating number makes an issue)
// Benefit without recursion, highly efficent and uses 'Binet formula'
function fib(position) {
    const alpha = (1 + Math.sqrt(5))/ 2;
    const beta = (1 - Math.sqrt(5))/ 2;
    const value = Math.round((Math.pow(alpha, position) - Math.pow(beta, position)) / (alpha - beta));
    console.log(`Value of fibonacci at postion ${position} is: ${value}`);
}
fib(POSITION)
// Output
// Value of fibonacci at postion 70 is: 190392490709135