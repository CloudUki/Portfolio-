const express = require('express');
const app = express();
const port = 3000;

// Basic route to respond with "Hello World"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});