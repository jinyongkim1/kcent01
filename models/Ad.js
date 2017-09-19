const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const adSchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

// _user => underscore is a convention that tells, this is a relations field.

mongoose.model("ads", adSchema);
