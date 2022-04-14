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

{
  class Human {
    constructor(firstName, lastName, gender, state) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.state = state;
    }

    #preparation(){
      console.log("Bangun tidur");
      console.log("Mandi");
      console.log("Sarapan");
    }

    #doWork(){
      console.log("Absen");
      console.log("Kerja");
      console.log("Istirahat");
      console.log("Pulang");
    }

    #getHome(){
      console.log("Naik kendaraan");
      console.log("Perjalanan pulang");
    }

    daily(){
      this.#preparation();
      this.#doWork();
      this.#getHome();
    }

    _play(){
      console.log("Main PUBG kuy!");
    }
  }

  class Chef extends Human {
    doPlay(){ 
      super._play();
    }

    _doCook(){
      console.log(`I'm cooking baby!`);
    }

    #preparation(){
      console.log(`Trying overriding parent`);
    }

    callPreparation(){
      this.#preparation();
    }
  }

  const gusde = new Chef("Bagus", "Suprapta", "Male", "Indonesia");
  gusde.doPlay();
  gusde._doCook();
  gusde.callPreparation();
}

{
  class GrandFather {
    constructor(grandFatherName){
      this.grandFatherName = grandFatherName;
    }
  }

  class Father extends GrandFather {
    constructor(grandFatherName, fatherName){
      super(grandFatherName);
      this.fatherName = fatherName;
    }
  }

  class Son extends Father {
    constructor(grandFatherName, fatherName, sonName){
      super(grandFatherName, fatherName, sonName);
      this.sonName = sonName;
    } 
  }

  const gusde = new Son("Heru", "Here", "Gusde");
  console.log(gusde);
}