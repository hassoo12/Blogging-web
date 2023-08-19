// pages/dashboard.js
import React, { useState } from 'react';
import styles from '../styles/dashboard.module.css'; // Import the CSS module
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState([]);

  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    const newBlog = { id: Date.now(), title, content };
    setBlogs(prevBlogs => [...prevBlogs, newBlog]);
    setTitle('');
    setContent('');

    // Save the new blog to localStorage
    const updatedBlogs = JSON.stringify([...blogs, newBlog]);
    localStorage.setItem('blogs', updatedBlogs);
  };

  return (
    <div>
      <h1 className={styles.heading}>Dashboard</h1>
      <div className={styles.blogForm}>
        <h2>Create a New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </div>
          <button style={{backgroundColor: '#7749F8'}} type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.blogList}>
        <h2>Uploaded Blogs</h2>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blog}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
















