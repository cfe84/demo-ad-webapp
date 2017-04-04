const express = require("express");
const jwtDecode = require("jwt-decode");

const PORT = process.env.PORT || 8080;

var app = new express();

app.get("/", (req, res) => {
  for (var name in req.headers)
    res.write(`${name}: ${req.headers[name]}\n`);
  var token;
  token = req.headers["x-ms-token-aad-id-token"];
  if (token)
  {
    var token = jwtDecode(token);
    if (token.groups)
      token.groups.forEach(group => res.write(`You are part of group ${group}\n`));
    if (token.roles)
      token.roles.forEach(role => res.write(`You have role ${role}\n`));
  }
  res.end();
});

console.log(`Listening on port ${PORT}`);
app.listen(PORT);