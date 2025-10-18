/* The Strategy Pattern allows you to select an algorithm (strategy) at runtime — 
meaning the behavior of your program can change dynamically, without modifying the main code. */

class StrategyA {
  execute() { return "Strategy A executed"; }
}
class StrategyB {
  execute() { return "Strategy B executed"; }
}

class Context {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  executeStrategy() {
    return this.strategy.execute();
  }
}

const context = new Context();
context.setStrategy(new StrategyA());
console.log(context.executeStrategy()); // Strategy A executed

context.setStrategy(new StrategyB());
console.log(context.executeStrategy()); // Strategy B executed





/* 1. Different Strategies (Algorithms)
class StrategyA {
  execute() { return "Strategy A executed"; }
}

class StrategyB {
  execute() { return "Strategy B executed"; }
}


Each strategy represents a different way of doing the same task.

Here:

StrategyA executes one type of logic.

StrategyB executes another.

Both have a common interface — a method named execute().

✅ This ensures interchangeability: both can be used by the same context.

2. Context Class
class Context {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  executeStrategy() {
    return this.strategy.execute();
  }
}


The Context doesn’t know the details of each strategy.

It just knows that any strategy it receives will have an execute() method.

setStrategy(strategy) → assigns which strategy to use.

executeStrategy() → calls that strategy’s execute() function.

So the context acts as a controller that can easily switch between different behaviors.

3. Using the Pattern
const context = new Context();
context.setStrategy(new StrategyA());
console.log(context.executeStrategy()); // Strategy A executed

context.setStrategy(new StrategyB());
console.log(context.executeStrategy()); // Strategy B executed


First, you tell the context to use StrategyA.
→ Output: "Strategy A executed"

Then you switch to StrategyB.
→ Output: "Strategy B executed"

So, you change the behavior dynamically without changing the core context logic.

✅ Output
Strategy A executed
Strategy B executed

🎯 Purpose of the Strategy Pattern

The Strategy Pattern is used when:

You have multiple ways to perform a task.

You want to choose which one to use at runtime.

You want to avoid complex if-else or switch statements scattered across your code.

🧭 Real-Life Analogy

Think of a payment system:

Strategies: CreditCardPayment, PayPalPayment, UPIPayment

Context: PaymentProcessor

The context doesn’t care how the payment is processed — it just executes the selected payment strategy.

class CreditCardPayment {
  pay() { return "Paid using Credit Card"; }
}

class PayPalPayment {
  pay() { return "Paid using PayPal"; }
}

class PaymentProcessor {
  setPaymentMethod(strategy) {
    this.strategy = strategy;
  }
  processPayment() {
    return this.strategy.pay();
  }
}

const payment = new PaymentProcessor();
payment.setPaymentMethod(new CreditCardPayment());
console.log(payment.processPayment()); // Paid using Credit Card

payment.setPaymentMethod(new PayPalPayment());
console.log(payment.processPayment()); // Paid using PayPal

⚙️ Advantages

✅ Makes code flexible and extensible
✅ Avoids big conditional statements
✅ Allows runtime switching of behavior
✅ Promotes open/closed principle (add new strategies without changing existing code)

💡 In JavaScript, you often use Strategy Pattern when:

Choosing between different sorting or filtering methods

Implementing different pricing or discount algorithms

Switching between authentication methods (JWT, OAuth, SSO, etc.)

Selecting different routes or storage backends dynamically */