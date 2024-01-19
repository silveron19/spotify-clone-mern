import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';
import playlistRoutes from './api/playlist/Routes.js';
import userRoutes from './api/user/Routes.js';
import path from 'path';

dotenv.config();

const app = express();
connectDB();

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(express.json());

app.use('/api', [playlistRoutes, userRoutes]);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
