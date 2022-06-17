async function generateSequence(n) {
  if (typeof n !== "number") throw new Error("n must be a number!");
  const results = [];
  for (let i = 1; i <= n; i++) results.push(i);
  return results;
}

generateSequence(100000000)
  .then(results => {
    console.log(results);
  })
  .catch(console.error)

generateSequence("Aku bukan angka")
  .then(console.log)
  .catch(console.error)
