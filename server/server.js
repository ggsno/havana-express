const express = require("express");
const path = require("path");
const app = express();

const http = require("http").createServer(app);
const port = 8080;

// app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.static("../client/build"));

// app.get("/", function (request, response) {
//   //   response.sendFile(path.join(__dirname, "../client/build/index.html"));
//   response.sendFile("../client/build/index.html");
// });

http.listen(port, function () {
  console.log(`listening in ${port}`);
});
