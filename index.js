const express = require("express");

const PORT = process.env.PORT | 8080;

var app = new express();

app.get("/", (req, res) => {
  res.write(`Principal id: ${req.get("X-MS-CLIENT-PRINCIPAL-NAME")}\n`);
  res.write(`Principal name: ${req.get("X-MS-CLIENT-PRINCIPAL-ID")}`);
  res.end();
});

console.log(`Listening on port ${PORT}`);
app.listen(PORT);