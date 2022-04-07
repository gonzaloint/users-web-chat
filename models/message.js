const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema('Massage', {
  dateSent: {
    type: Date
  },
  sender: {
    type: mongoose.Schema.Types.ObjectID,
  },
  body: {
    type: String
  },
  image: {
    type: String
  },
  conversation: {
    type: mongoose.Schema.Types.ObjectID,
    required: true,
    ref: 'Conversation'
  }
});

const Message = mongoose.model('Message', userSchema);
module.exports = Message;
