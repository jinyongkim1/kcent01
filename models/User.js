const mongoose = require('mongoose');
// const Schema = mongoose.Schema;  (the same as below)
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// loads a schema into mongoose
mongoose.model('users', userSchema);
