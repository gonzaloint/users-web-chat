const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  dateCreated: {
    type: Date
  },
  admin: {
    type: mongoose.Schema.Types.ObjectID,
  },
  participants: {
    type: [
      {
	type: mongoose.Schema.Types.ObjectID,
      }
    ]
  },
  listed: {
    type: Boolean
  }
});



const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation
