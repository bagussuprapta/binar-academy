function sayHi (name) {
  let halo = `Hai, ${name.toUpperCase()}!`;
  return halo;
}

let test1 = sayHi("everything");
console.log(test1);

let test2 = sayHi(100);
console.log(test1);