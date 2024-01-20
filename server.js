const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

// Basic route for testing the server
app.get("/", (req, res) => {
  res.send("Hello, your game server is running!");
});

// Start the server
app.listen(port, () => {
  console.log(`Game server listening at http://localhost:${port}`);
});
