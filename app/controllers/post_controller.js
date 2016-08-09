import Post from '../models/post_model';

export const createPost = (req, res) => {
  // res.send('post should be created here');
  const post = new Post();
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.content = req.body.content;
  post.save()
    .then(result => {
      res.json({ message: 'Post created!' });
    })
    .catch(error => {
      res.json({ error });
    });
};
export const getPosts = (req, res) => {
  Post.find()
  .then(posts => {
    const cleanPosts = posts.map(post => {
      return { id: post._id, title: post.title, tags: post.tags, content: post.content };
    });
    res.json(cleanPosts);
  });
};
export const getPost = (req, res) => {
  Post.findById(req.params.id)
  .then(post => {
    const cleanPost = { id: post._id, title: post.title, tags: post.tags, content: post.content };
    res.json(cleanPost);
  });
};
export const deletePost = (req, res) => {
  Post.findByIdAndRemove(req.params.id)
  .then(() => {
    res.json('post deleted');
  });
};
export const updatePost = (req, res) => {
  const updatedPost = new Post();
  updatedPost.title = req.body.title;
  updatedPost.tags = req.body.tags;
  updatedPost.content = req.body.content;
  Post.update({ _id: req.params.id }, updatedPost)
  .then(() => {
    res.json('post updated');
  });
};
