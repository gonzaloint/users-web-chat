import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  profilePhoto: {
    type: String
  },
  friends: {
    type:[
      {
	type: Schema.Types.ObjectID,
      }
    ]
  }
});

const User = model("User", userSchema);
export default User
