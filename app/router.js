import { Router } from 'express';
import * as Posts from './controllers/post_controller';


const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

// your routes will go here

router.route('/posts')
  .post(Posts.createPost)
  .get(Posts.getPosts);

router.route('/posts/:id')
  .put(Posts.updatePost)
  .get(Posts.getPost)
  .delete(Posts.deletePost);

export default router;
