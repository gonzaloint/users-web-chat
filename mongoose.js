const mongoose = require('mongoose');
const User = require('./models/users.js');
const Conversation = require('./models/conversation.js');
const Messages = require('./models/conversation.js');

mongoose.connect('mongodb://127.0.0.1:27017/usersdb');

const anUser0 = new User({
  userName: 'DarkLord999',
  firstName: 'Angelito',
  lastName: 'Perez',
  profilePhoto: 'https://placekitten.com/g/200/300',
  friends: []
});

const anUser1 = new User({
  userName: 'Darkness666',
  firstName: 'Angelito',
  lastName: 'Perez',
  profilePhoto: 'https://placekitten.com/g/200/300',
  friends: []
});

const anUser2 = new User({
  userName: 'DarkLord777',
  firstName: 'Angelito',
  lastName: 'Perez',
  profilePhoto: 'https://placekitten.com/g/200/300',
  friends: []
});

const conversation0 = new Conversation({
  dateCreated: new Date(),
  admin: anUser0._id,
  participants: [anUser0._id, anUser1._id],
  listed: false
});

const conversation1 = new Conversation({
  dateCreated: new Date(),
  admin: anUser2._id,
  participants: [anUser2._id, anUser1._id],
  listed: true
});

const conversation2 = new Conversation({
  dateCreated: new Date(),
  admin: anUser1._id,
  participants: [anUser1._id],
  listed: true
});

let data = [anUser0, anUser1, anUser2, conversation0, conversation1, conversation2];

for (let i of data) {
  i.save().then(() => {
    console.log(i);
  }).catch((error) => {
    console.log('ERROR! in: ', i, error);
  });
}
