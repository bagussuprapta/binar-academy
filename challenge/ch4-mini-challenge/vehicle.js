class Vehicle {
  constructor(wheel, country){
    this.wheel = wheel;
    this.country = country;
  }

  getInfo(){
    return `Jenis kendaraan roda ${this.wheel} dari negara ${this.country}`;
  }
}

class Car extends Vehicle {
  constructor(wheel, country, brand, price, taxPercentage){
    super(wheel, country);
    this.brand = brand;
    this.price = price;
    this.taxPercentage = taxPercentage;
  }

  getTotalPrice(){
    return this.price + (this.price * (this.taxPercentage / 100));
  }

  getInfo(){
    console.log(super.getInfo());
    return `Kendaraan ini nama mereknya ${this.brand} dengan total ${car.getTotalPrice().toLocaleString("id-ID")} beserta pajaknya!`;
  }
}

const vehicle = new Vehicle(4, "United States");
console.log(vehicle.getInfo(), `\n`);

const car = new Car(4, "Japan", "Suzuki", 2000000000, 10);
console.log(car.getInfo());