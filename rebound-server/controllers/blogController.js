const Blog = require("../models/Blog");

// Lấy danh sách tất cả blog
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    res.status(500).json({ message: "Error fetching blogs", error: error.message });
  }
};

// Thêm bài viết mới
exports.createBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error("❌ Error creating blog:", error);
    res.status(500).json({ message: "Error creating blog", error: error.message });
  }
};