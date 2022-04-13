class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    //this.loadButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    this.clear;
    const passenger = document.getElementById('passenger').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const dateAndTime = Date.parse(`${date}T${time}Z`);

    if(passenger == "" || date == "" || time == "") {
      alert("Search input is empty");
    } else {
      const cars = await Binar.listCars();
      const availableCar = cars.filter((car) => {
        return car.capacity >= passenger && car.available === true && Date.parse(car.availableAt) > dateAndTime;
      });
      Car.init(availableCar);
    }
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
