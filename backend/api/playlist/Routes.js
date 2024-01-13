import express from 'express';
import getPlaylistsHandler from './Handler.js';

const router = express.Router();

router.get('/playlists', getPlaylistsHandler);

export default router;
