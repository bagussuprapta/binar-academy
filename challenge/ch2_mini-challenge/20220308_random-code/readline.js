// 1. buat function penjumlahan dengan parameter (operator, x, y, z)
// 2. gunakan user input via terminal dengan readline module untuk nilai (operator, x, y, z)
// 3. didalam function berikan 4 kondisi :
// - jika nilai operator = perkalian, maka lakukan perkalian x * y * z return hasilnya
// - jika nilai operator = pembagian, maka lakukan pembagian x / y / z return hasilnya
// - jika nilai operator = campuran, maka lakukan penjumlahan x * y / z return hasilnya
// - selain itu semua, default kondisinya, lakukan penjumlahan x - y + z return hasilnya
// 4. console.log atau print = "ini hasil dari penjumlahan x y z = ", penjumlahan(operator, x, y, z)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sum(operator, x, y, z){
  if(operator == "mul"){
    console.log("Result: ", x * y * z);
  } else if(operator == "sum"){
    console.log("Result: ", parseInt(x) + parseInt(y) + parseInt(z));
  } else if(operator == "dis"){
    console.log("Result: ", x / y / z);
  }
}

console.log("Operator");
console.log("1. mul");
console.log("2. sum");
console.log("3. dis");

rl.question("Operator: ", (operator)=> {
  rl.question("First value: ", (x)=> {
    rl.question("Second value: ", (y)=> {
      rl.question("Third value: ", (z)=> {
        sum(operator, x, y, z);
        rl.close();
      });
    });
  });  
});

