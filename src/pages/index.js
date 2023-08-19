// pages/index.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/blog.module.css';

const HomePage = ({ blogs }) => {
  return (
    <div>
      <h1 className={styles.heading}>Welcome to the Blog Page</h1>
      <div className={styles.blogList}>
        {blogs.map(blog => (
          <div key={blog.id} className={styles.blog}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <Link href={`/blog/${blog.id}`}>
              <a>Read More</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch('/api/blogs');
    const data = await response.json();
    return {
      props: {
        blogs: data,
      },
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default HomePage;
