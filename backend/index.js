const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();

const app = express();
app.use(cors()); 
app.use(express.json());


mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => {
    console.error(" MongoDB Connection Failed:", err);
    process.exit(1);
  });


const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", UserSchema);


const ThoughtSchema = new mongoose.Schema({
  email: { type: String, required: true },
  thought: { type: String, required: true },
  suggestedBlogs: [{ title: String, link: String }],
});
const Thought = mongoose.model("Thought", ThoughtSchema);


app.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists. Please login." });
    }
    const user = new User({ firstname, lastname, email, password });
    await user.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Something went wrong during signup." });
  }
});


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found. Please sign up first!" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    res.status(200).json({ message: "Login successful!", email: user.email });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Something went wrong during login." });
  }
});

app.post("/thoughts", async (req, res) => {
  const blogs = [
    { keyword: "happy", title: "Stay Happy", link: "https://beinghappiness.com/top-50-blogs-on-happiness/" },
    { keyword: "sad", title: "Overcoming Sadness", link: "https://www.emedihealth.com/mental-health/blogs-about-depression" },
    { keyword: "success", title: "Path to Success", link: "https://www.emedihealth.com/mental-health/blogs-stress-relief" },
  ];

  try {
    const { email, thought } = req.body;
    if (!email || !thought) {
      return res.status(400).json({ message: "Email and thought are required." });
    }

    const suggestedBlogs = blogs
      .filter((b) => thought.toLowerCase().includes(b.keyword))
      .map((b) => ({ title: b.title, link: b.link }));

    const newThought = new Thought({ email, thought, suggestedBlogs });
    await newThought.save();
    res.status(201).json({ message: "Thought saved successfully", suggestedBlogs });
  } catch (err) {
    console.error("Thought Error:", err);
    res.status(500).json({ message: "Something went wrong while saving thought." });
  }
});


app.get("/thoughts/:email", async (req, res) => {
  try {
    const thoughts = await Thought.find({ email: req.params.email });
    if (!thoughts.length) {
      return res.status(404).json({ message: "No thoughts found." });
    }
    res.status(200).json(thoughts);
  } catch (err) {
    console.error("Fetch Thoughts Error:", err);
    res.status(500).json({ message: "Error fetching thoughts." });
  }
});


app.listen(3001, () => console.log("Server started"));
