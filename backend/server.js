const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// Connect to MongoDB
// const uri = process.env.ATLAS_URI;
const uri =
  "mongodb+srv://admin:admin@cluster0.lluijmt.mongodb.net/?retryWrites=true&w=majority";
console.log(uri.toString());
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection to MongoDB established successfully!");
});

// Define user schema and model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
  //   const { email, password } = req.body;
  const user = await User.findOne({ email: req.body.email });
  // Find the user by email
  //   const user = await User.findOne({ email });

  if (user) {
    // Compare the provided password with the hashed password in the database
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      res.send("Login successful!");
      res.render("index.ejs", { title: "Home" });
    } else {
      res.send("Incorrect password");
    }
  } else {
    res.send("User not found");
  }
});

// Register page
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.redirect("/register");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
