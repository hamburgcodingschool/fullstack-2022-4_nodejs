readlineSync = require("readline-sync");

username = readlineSync.question("What is your name?\n");

console.log("Wow, funny name, " + username);