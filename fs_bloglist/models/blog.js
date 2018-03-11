const mongoose = require('mongoose')

const Blog = mongoose.model('Blog', {
  title: String,
  author: String,
  url: String,
  likes: Number,
  comments: [{comment: String }],
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = Blog
