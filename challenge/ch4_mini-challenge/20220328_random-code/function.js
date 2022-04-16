{
  function getDiscount (price, discount) {
    return (price * discount) / 100;
  }
  console.log(getDiscount(100, 50));
}

// Function Declaration (ES5)
{
  function volTabung(r, t) { 
    return 3.14 * r**2*t
  };
  console.log( 'Volume Tabung:', volTabung(10, 4))
}

// Function Expression
{
  const volTabung2 = function(r, t) { return 3.14 * r**2 * t}
  console.log( 'Volume Tabung:', volTabung2(10, 4));
}

// Arrow Function (ES6)
{
  const volTabung3 = (r, t) => 3.14 * r**2 * t; 
  console.log( 'Volume Tabung:', volTabung3(10, 4))
}

// Higher Order Function
{
  const strArray = ['JavaScript', 'Java', 'C'];

  function forEach(array, callback){
    const newArray = [];

    for (let i = 0; i < array.length; i++){
      newArray.push(callback(array[i]));
    }
    return newArray;
  };

  const lenArray = forEach(strArray, (item) => {
    return item.length;
  });

  console.log(lenArray);
}