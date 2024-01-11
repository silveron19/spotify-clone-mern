import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';
import playlistRoutes from './api/playlist/Routes.js';

dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT;

app.use(express.static('frontend/build'));
app.use('/api', playlistRoutes);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello MERN Stack!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
