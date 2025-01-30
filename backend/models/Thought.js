// const mongoose = require("mongoose");

// const ThoughtSchema = new mongoose.Schema({
//   email: String,
//   thought: String,
//   suggestedBlogs: [String],
// });

// module.exports = mongoose.model("Thought", ThoughtSchema);



const mongoose = require("mongoose");

const ThoughtSchema = new mongoose.Schema({
  email: { type: String, required: true },
  thought: { type: String, required: true },
  suggestedBlogs: [{ title: String, link: String }],
});

module.exports = mongoose.model("Thought", ThoughtSchema);

