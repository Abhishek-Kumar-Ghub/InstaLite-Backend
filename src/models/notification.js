import mongoose from "mongoose";    
const notificationSchema = new mongoose.Schema({
    recipient: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'User',
        required: true,
    },
    sender: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    type: { 
        type: String,
        enum: ['like', 'comment', 'follow', 'mention'],
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,

        ref: 'Post',
        required: false,
    },
    //notification read kii gyi h kii nhii
    isRead: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Notification = mongoose.model('Notification', notificationSchema);
export default Notification;