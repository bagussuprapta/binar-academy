// Numbers with a leading 0 used a radix of 8 (octal) before ECMAScript 5.
// These days, browsers will treat '0101' as decimal.
console.log(parseInt("0101"));

// Numbers that start with 0x use a radix of 16 (hexidecimal)
console.log(parseInt("0x0101"));

// Numbers starting with anything else assumes a radix of 10
console.log(parseInt("101"));

// Or you can specify the radix, in this case 2 (binary)
console.log(parseInt("0101", 2));
