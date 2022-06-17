async function generateSequence(n) {
  const result = [];
  for (let i = 1; i <= n; i++) result.push(i);
  return result;
}

generateSequence(100000000).then((sequence) => {
  console.log(
    "Asynchronous:",
    "Aku jalannya asynchronous." +
      " Jadi aku diekskusi belakangan" +
      " kalau udah engga ada urusan di Main Thread"
  );
  console.log("sequence:", sequence);
});

console.log("Synchronous:", "Aku jalan duluan yak!");