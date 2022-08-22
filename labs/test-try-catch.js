console.log("entering try-catch statement");

try {
  console.log("entering try block 1");
  try {
    console.log("entering try block 2");
    throw "error from try catch 2";
  } catch (e) {
    throw e;
  }
  console.log("this message is never seen");
} catch (e) {
  console.log("entering catch block 1");
  console.log(e);
  console.log("leaving catch block 1");
} finally {
  console.log("entering and leaving the finally block 1");
}

console.log("leaving try-catch statement");
