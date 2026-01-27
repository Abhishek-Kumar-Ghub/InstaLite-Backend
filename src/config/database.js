import mongoose from 'mongoose';
import dotenv from 'dotenv';
doenv.config();


const connectionDb = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('database is connected successfully');
    } catch (error) {
        console.error('connection failed', error);
    }
};
export default connectionDb;

