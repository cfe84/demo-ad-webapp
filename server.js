const express = require("express");
const jwtDecode = require("jwt-decode");

const PORT = process.env.PORT || 8080;

var app = new express();

app.get("/", (req, res) => {
  for (var name in req.headers)
    res.write(`${name}: ${req.headers[name]}\n`);
  var token;
  if (token = req.headers["x-ms-token-aad-id-token"])
  {
    var token = jwtDecode(token);
    if (token.groups)
      token.groups.forEach(group => console.log(`You are part of group ${group}`));
    if (token.roles)
      token.roles.forEach(role => console.log(`You have role ${role}`));
  }
  res.end();
});

console.log(`Listening on port ${PORT}`);
app.listen(PORT);