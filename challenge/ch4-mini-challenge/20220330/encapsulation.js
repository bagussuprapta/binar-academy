{
  class Human {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }

    #doGossip = () => {
      console.log(`My address will become viral ${this.address}`);
    }

    talk(){
      console.log(this.#doGossip());
    }

    static #isHidingAre = true;
  }

  let mj = new Human("Michael Jackson", "Isekai");
  mj.talk()

  try {
    // Human.#isHidingArea; -> will return error
    // mj.#doGossip(); -> eill return error
  } catch(err){
    console.error(err);
  }
}