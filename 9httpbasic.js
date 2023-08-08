const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome user");
  }
  if (req.url === "/about") {
    res.end("this is about page");
  }
  // res.end(`
  // <h1>404 not found</h1>`);
});

server.listen(5000);
