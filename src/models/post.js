import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({

  caption: {
    type: String, 
    required: false,
    trim: true,
  },
  author: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
    likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: [],
    }],
//   comments: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Comment',
//     default: [],
//   }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', postSchema);
export default Post;