import express from 'express';
import dotenv from 'dotenv';
import connectionDb from './src/config/database.js';
import router from './src/routes/auth.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
connectionDb();

app.get('/', (req, res) => {
    res.send('Server is running healthy');
});

app.use("/user",router)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});