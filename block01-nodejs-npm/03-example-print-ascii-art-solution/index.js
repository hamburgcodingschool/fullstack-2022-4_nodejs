readlineSync = require("readline-sync");
art = require("ascii-art");

title = readlineSync.question("Title:");
description = readlineSync.question("Description:");

const printer = (err, rendered) => {
  if (err) throw err;
  console.log(rendered);
}

art.font(title, 'doom', printer);
art.font(description, 'rusted', printer);