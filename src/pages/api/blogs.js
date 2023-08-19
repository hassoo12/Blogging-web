// pages/api/blogs.js
export default function handler(req, res) {
    if (req.method === 'GET') {
      // Implement logic to read blogs from a database or JSON file
      const blogs = []; // Replace with your data source
        res.status(200).json(blogs);
    } else if (req.method === 'POST') {
      // Implement logic to add a new blog
      const newBlog = req.body; // Assuming you're sending the blog data in the request body
      // Implement logic to save newBlog to a database or JSON file
        res.status(201).json(newBlog);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
    }
