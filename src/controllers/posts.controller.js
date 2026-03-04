// src/controllers/posts.controller.js

const getAllPosts = (req, res) => {
    res.status(200).json({
        success: true,
        message: "All posts fetched successfully"
    });
};

module.exports = {
    getAllPosts
};