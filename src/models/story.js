import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },        
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires:60 * 60 * 24, // Story expires after 24 hours
  },
  caption: {
    type: String,
    required: false,
    trim: true,
  },
});
const Story = mongoose.model('Story', storySchema); 
export default Story;