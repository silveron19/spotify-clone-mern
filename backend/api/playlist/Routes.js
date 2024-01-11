import express from 'express';
import getPlaylists from './Handler.js';

const router = express.Router();

const playlistRoutes = router.get('/playlists', getPlaylists);

export default playlistRoutes;
