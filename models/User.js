const mongoose = require("mongoose");
// const Schema = mongoose.Schema;  (the same as below)
const { Schema } = mongoose;

const googleUserSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// loads a schema into mongoose
mongoose.model("users", googleUserSchema);
