const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());


let users = [];


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;


app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  
  if (!emailRegex.test(email)) {
    return res.status(400).json("Invalid email format ");
  }

  
  if (!passwordRegex.test(password)) {
    return res
      .status(400)
      .json("Password must be 6+ chars with letters & numbers ");
  }

  
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.status(400).json("User already exists ");
  }

 
  const hashedPassword = await bcrypt.hash(password, 10);

  
  users.push({
    email,
    password: hashedPassword,
  });

  res.json("User registered ");
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

 
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json("User not found ");
  }

 
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json("Wrong password ");
  }

  res.json("Login successful ");
});


app.listen(3000, () => {
  console.log("Server running on port 3000 ");
});