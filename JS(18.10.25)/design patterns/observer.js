/* Purpose: Defines a one-to-many relationship — when one object (subject) changes state, all its dependents (observers) are notified
Use Case: Event handling systems, notifications, chat apps. */

class Subject {
  constructor() {
    this.observers = [];   /* 🔹 this.observers = []

                            Keeps a list of all observers who have subscribed. */
  }
  subscribe(observer) {         /* 🔹 subscribe(observer)

                                    Adds an observer to the list — this is like following a YouTube channel. */
    this.observers.push(observer);
  }
  notify(data) {                        /* notify(data)

                                            Sends updates to all subscribed observers by calling their update() method. */
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {                                 /* Every observer must have an update() method.

                                                The Subject will call this method when there’s a new event or data update. */
    console.log(`Observer received: ${data}`);
  }
}

const subject = new Subject();   /* subject → the main publisher.

                                obs1 and obs2 → two observers who want to listen for updates.    */
const obs1 = new Observer();
const obs2 = new Observer();

subject.subscribe(obs1);    /* Both observers are added to the subject.observers list.

                            So the subject now knows whom to notify. */
subject.subscribe(obs2);  
// The subject loops through its list and calls update("New Event!") on each observer.
subject.notify("New Event!"); // Notifies both observers
