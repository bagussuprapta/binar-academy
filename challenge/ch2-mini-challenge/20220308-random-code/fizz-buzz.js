function examOne(limit){
  let total = 0;
  for(let i = 0; i < limit; i++)
    if(i % 3 == 0 || i % 5 == 0)
      total += i;
  return total;
}

console.log(examOne(1000));

function examTwo(limit){ 
  for(let i = 0; i < limit; i++)
    if(i % 2 == 1)
      console.log(i);
}

examTwo(20);

function examThree(limit){
  for (i=1; ++i<=limit;) {
    console.log((i%3==0&&i%5==0)?"FizzBuzz":(i%3==0)?"Fizz" : (i%5==0)?"Buzz" : i);
  }
}

examThree(100);

