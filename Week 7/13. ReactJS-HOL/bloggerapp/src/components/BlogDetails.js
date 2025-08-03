import React from 'react';
import './components.css';

const blogs = [
  {
    id: 101,
    title: 'React Learning',
    author: 'Stephen Biz',
    desc: 'Welcome to learning React!'
  },
  {
    id: 102,
    title: 'Installation',
    author: 'Schewzdenier',
    desc: 'You can install React from npm.'
  }
];

function BlogDetails() {
  return (
    <div className="box">
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong>
            <div className="author">{blog.author}</div>
            <div className="desc">{blog.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
