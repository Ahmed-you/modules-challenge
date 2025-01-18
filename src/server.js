const http = require("http");
const router = require("./router");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4051;

if (process.env.ENV === "dev") {
  console.log("You are developer");
}

const server = http.createServer(router);

server.listen(port);

console.log("server running on: http://" + host + ":" + port);

module.exports = { server, router };
