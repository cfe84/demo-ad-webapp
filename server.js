const express = require("express");

const PORT = process.env.PORT || 8080;

var app = new express();

app.get("/", (req, res) => {
  for (var name in req.headers)
    res.write(`${name}: ${req.headers[name]}\n`);
  res.end();
});

console.log(`Listening on port ${PORT}`);
app.listen(PORT);