/* The Factory Pattern is used when you need to create different types of objects, 
but you don’t want to expose the creation logic to the client code. */

class Car {
  drive() { return "Driving a car"; }   /* defining blueprint by creating class car */
}
class Bike {
  drive() { return "Riding a bike"; }   /* defining blueprint by creating class bike */
}

class VehicleFactory {                 /* creating factory class which is responsible for creating multiple instances based on given type */
  static createVehicle(type) {         /* It means you can call this method without creating an instance of vehiclefactory */
    if (type === "car") return new Car();
    if (type === "bike") return new Bike();
  }
}

const vehicle = VehicleFactory.createVehicle("car");   /* calls static factory method since car is passed it returns car object so vehicle now refers to a car instance */
console.log(vehicle.drive()); // Driving a car   /* calling car method */          
