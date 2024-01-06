import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT;

app.use(express.static('frontend/build'));

app.get('/', (req, res) => {
  res.send('Hello MERN Stack!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
