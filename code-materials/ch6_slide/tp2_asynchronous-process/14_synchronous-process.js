function generateSequence(n){
  const result = [];
  for(let i = 1; i <= n; i++)
    result.push(i);
  return result;
}

const sequence = generateSequence(100000000);
console.log("sequence", sequence);