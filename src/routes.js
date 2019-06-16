const express = require('express');
const multer = require('multer');
const uploadCOnfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const ImageController = require('./controllers/ImageController');

const routes = new express.Router();
const upload = multer(uploadCOnfig);

routes.get('/images/:filename', ImageController.get);
routes.get('/posts', PostController.get);
routes.post('/posts', upload.single('image'), PostController.post);
routes.post('/posts/:id/like', LikeController.post);

module.exports = routes;