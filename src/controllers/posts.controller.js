let posts = [];

exports.getAllPosts = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Posts fetched successfully',
    data: posts
  });
};

exports.createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      status: 'error',
      message: 'Title and content are required'
    });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content
  };

  posts.push(newPost);

  res.status(201).json({
    status: 'success',
    message: 'Post created successfully',
    data: newPost
  });
};