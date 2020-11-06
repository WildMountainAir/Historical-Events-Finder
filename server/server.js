/* eslint-disable no-console */
const express = require('express');

const app = express();
const PORT = 8050;

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

// If you had to handle requests on the server side, this is where that would occur
app.get('/', (req, res) => {
  // Handle the request
  // -- Could make DB queries here
  // Send back O-K
  res.status(200).send('The server is taking requests');
});

// Listening for requests on the PORT
app.listen(PORT, () => {
  console.log(`Server started and listening on Port ${PORT}`);
});
