readlineSync = require("readline-sync");
art = require("ascii-art");

textToPrint = readlineSync.question("What to print:");

const printer = (err, rendered) => {
  if (err) throw err;
  console.log(rendered);
}

art.font(textToPrint, 'doom', printer);