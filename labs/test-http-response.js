const http = require("http");
//console.log(http.STATUS_CODES);

var https = require("https");

https
  .get("https://encrypted.google.com/", function (res) {
    console.log("statusCode: ", res.statusCode); // <======= Here's the status code
    console.log("headers: ", res.headers);

    res.on("data", function (d) {
      process.stdout.write(d);
    });
  })
  .on("error", function (e) {
    console.error(e);
  });
