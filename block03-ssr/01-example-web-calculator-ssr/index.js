const express = require("express");

const app = express();

const port = 3000;

app.get("/", function(req, res) {
  const html = `
    <html>
      <head>
        <title>Calculator</title>
      </head> 
      <body>
        <h1>Calculator</h1>
        <form action="/calculate">
          <input type="number" name="number1" />
          <input type="number" name="number2" />  
          <button type="submit">Calculate</button>
        </form>
      </body>
    </html>
  `;

  res.send(html);
});

app.get("/calculate", function(req, res) {
  const number1 = req.query.number1 || 0;
  const number2 = req.query.number2 || 0;

  const result = Number(number1) + Number(number2);

  const html = `
    <html>
      <head>
        <title>Calculator Result</title>
      </head>
      <body>
        <h1>Calculator Result</h1>
        <p>${number1} + ${number2} = ${result}</p>
      </body>
    </html>
  `;

  res.send(html);
});

app.get("*", function(req, res) {
  res.status(404);
  res.send("This page does not exist... It's probably your fault...");
});

app.listen(port, function() {
  console.log(`Listening on ${port}...`);
});