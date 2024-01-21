const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors()); // http cors 관련 설정
app.use(express.json());

// Mongoose configuration
const mongoUri = mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error.message);
  });

// create user Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Trims whitespace // Minimum length of the username
  },
  password: {
    type: String,
    required: true,
  },
});

// Create user model
const User = mongoose.model("User", userSchema);

// Save user object
const newUser = new User({
  username: "johndoe",
  password: "password123",
});

// newUser
//   .save()
//   .then((user) => console.log("User created:", user))
//   .catch((err) => console.error("Error creating user:", err));

app.use(express.json());

// Basic route for testing the server
app.get("/", (req, res) => {
  res.send("Hello, your game server is running!");
});

// Post basic routes // Promise 체인 사용
app.post("/", (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });

  user
    .save()
    .then((savedUser) => {
      res.send("Success save database!");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Start the server
app.listen(port, () => {
  console.log("Hello, World! MongoDB connection successful.");
});
