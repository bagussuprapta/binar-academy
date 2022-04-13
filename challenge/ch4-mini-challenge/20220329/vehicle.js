class Vehicle {
  constructor(plate, manufacture, type, transmission, wheel, price, country, year) {
    this.plate = plate;
    this.manufacture = manufacture;
    this.type = type;
    this.transmission = transmission;
    this.wheel = wheel;
    this.price = price;
    this.country = country;
    this.year = year;
  }

  getGeneralInfo() {
    return `Manufacture: ${this.manufacture}\nPrice: ${this.price}`;
  }
}

class Car extends Vehicle {
  constructor(plate, manufacture, type, transmission, wheel, price, country, year, door) {
    super(plate, manufacture, type, transmission, wheel, price, country, year);
    this.door = door;
    this.tax = this.getTotalTax();
    this.totalPrice = this.tax + this.price;
  }

  getTotalTax(){
    this.tax = (10/100 * this.price) + (2/100 * this.price) + 143000 + 100000 + 250000;
  }

  getGeneralInfo(){
    console.log(super.getGeneralInfo());
    return `Transmision: ${this.manufacture}\nYear: ${this.year}\nDoor: ${this.door}`;
  }
}

const vehicle = new Vehicle("B 423 FG", "Ford", "Car", "Automatic", 4, 5000000000, "United States", 2020);
const car = new Car("B 423 FG", "Ford", "Car", "Automatic", 4, 5000000000, "United States", 2020, 4);

console.log(vehicle.getGeneralInfo());
console.log(car.getGeneralInfo());

