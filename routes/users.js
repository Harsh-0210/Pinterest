const mongoose = require('mongoose');
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb+srv://harshvardhansharma247:h1234567890@cluster0.zw4oid6.mongodb.net/Pinterest?retryWrites=true&w=majority", {
  serverSelectionTimeoutMS: 300000, // Increase timeout to 30 seconds (default is 30 seconds)
  // other options...
});


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  profileImage: {
    type: String,
    default: 'default_dp.jpg' // default image filename
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  }
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);
