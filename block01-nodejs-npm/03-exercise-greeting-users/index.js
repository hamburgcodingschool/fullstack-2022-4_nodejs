readlineSync = require("readline-sync");

const users = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred',   'age': 42 },
  { 'name': 'bamm-bamm', 'age': 3 },
  { 'name': 'wilma',  'age': 40 },
  { 'name': 'betty',  'age': 31 },
];

const greetings = ["Hello",  "Bonjour",  "Hola",  "Ciao",  "Hallo",  "こんにちは",  "안녕하세요",  "你好",  "Olá",  "Привет"]

minimalAge = readlineSync.question("How old do you have to be to be greeted?:");
minimalAge = parseInt(minimalAge);

console.log("You have to be at least " + minimalAge + " to be greeted.");

// find the all matching users and greet them with a random greeting