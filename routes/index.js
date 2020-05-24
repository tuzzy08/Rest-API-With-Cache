const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const validator = require('../utils/validators');

/* GET home page. */
router.get('/', (request, response, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/posts/:postId', postController.getPost);
router.get('/posts', postController.getAllPosts);
router.post('/posts/edit/:postId', postController.editPost);
router.post('/posts/create', postController.createPost);
router.get('/posts/delete/:postId', postController.deletePost);

module.exports = router;