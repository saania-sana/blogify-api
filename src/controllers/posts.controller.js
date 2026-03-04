exports.getAllPosts = async (req, res) => {
  res.json({
    message: "Fetching all posts"
  });
};

exports.getPostById = async (req, res) => {
  const postId = req.params.postId;

  res.json({
    message: "Fetching data for post with ID: " + postId
  });
};