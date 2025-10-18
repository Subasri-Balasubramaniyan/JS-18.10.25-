/* Purpose: Encapsulates private and public members using closures; helps in maintaining clean namespaces. */
/* Use Case: To create self-contained units like utilities, data services, or UI components. */


/* 1. Immediately Invoked Function Expression (IIFE)
(() => {
  // ...
})();


This is an IIFE — a function that runs immediately after being defined.

The parentheses around it () make it an expression, and the trailing () executes it right away.

This is often used to create a private scope in JavaScript. */
const CounterModule = (() => {   
  let count = 0; // private   /* count is a private variable — it exists only inside this function’s scope.

                            /* No code outside the IIFE can access it directly */
  return {
    increment: () => ++count,    /* The IIFE returns an object with two functions:

                                increment() → increases the count by 1

                                getCount() → returns the current value of count

                                These two methods can access the private variable count because of closures (functions remember the variables from their original scope). */

    getCount: () => count
  };
})();

CounterModule.increment();
console.log(CounterModule.getCount()); // 1
/* CounterModule.increment() increases count from 0 → 1.

CounterModule.getCount() returns the current count (1). */