const express = require("express");
const app = express();
const mySocket = require("./my-socket");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/2", (req, res) => {
  res.sendFile(__dirname + "/index2.html");
});

const server = app.listen(3000, () => {
  console.log("listening on *:3000");
});

mySocket(server);
