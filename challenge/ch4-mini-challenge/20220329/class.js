{
  class Student {
    constructor(name){
      this.name = name;
      return "helleo";
    }
  }
  
  const gusde = new Student("Gusde");
  console.log(gusde);
}

{
  class Human {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }

    introduce() {
      console.log(`Hi, my name is ${this.name}`);
    }

    work() {
      console.log(`Work!`);
    }
  }

  class Programmer extends Human {
    constructor(name, address, programmingLanguages) {
      super(name, address);
      this.programmingLanguages = programmingLanguages;
    }

    introduce() {
      super.introduce();
      console.log(`I can write ${this.programmingLanguages}`);
    }

    code() {
      console.log(`Code some `, this.programmingLanguages[Math.floor(Math.random() * this.programmingLanguages.length)]);
    }
  }

  let obama = new Human("Barrack Obama", "Washington DC");
  obama.introduce();

  let isyana = new Programmer("Isyana", "Jakarta", ["JavaScript", "Kotlin", "Python"]);
  isyana.introduce();
  isyana.code();
  isyana.work();

  try {
    obama.code();
  }
  catch(err) {
    console.log(err.message);
  }

  console.log(isyana instanceof Human);
  console.log(isyana instanceof Programmer);
}

