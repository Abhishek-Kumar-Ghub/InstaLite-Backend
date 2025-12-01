import Notification from "../models/notification.js";
 const createNotification =  async ({ recipient, sender, type, post }) => {

if(String(recipient) === String(sender)){
    return;
}
try {
    //create--> model ka use krenge
    //await hoga to async func hoga

    await Notification.create({
        recipient,
        sender,
        type,
        post,
    });
} catch (error) {
    console.error("Error creating notification:", error);
    res.status(500).json({ message: "Internal server error" });
}
 }
    
export default createNotification;


