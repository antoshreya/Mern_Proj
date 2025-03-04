// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   firstname: String,
//   lastname: String,
//   email: String,
//   password: String,
// });



// module.exports = mongoose.model("User", UserSchema);


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);

