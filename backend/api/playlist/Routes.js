import express from 'express';
import { getPlaylistsHandler, deletePlaylistsHandler } from './Handler.js';
import validateAccessToken from '../../middleware/validateAccessToken.js';

const router = express.Router();

router.get('/playlists', validateAccessToken, getPlaylistsHandler);
router.delete('/playlists', validateAccessToken, deletePlaylistsHandler);

export default router;
