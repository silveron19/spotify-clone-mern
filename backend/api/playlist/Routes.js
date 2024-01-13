import express from 'express';
import getPlaylistsHandler from './Handler.js';
import validateAccessToken from '../../middleware/validateAccessToken.js';

const router = express.Router();
router.get('/playlists', validateAccessToken, getPlaylistsHandler);

export default router;
