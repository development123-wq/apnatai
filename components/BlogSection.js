'use client';

import Image from 'next/image';
import '../public/css/BlogSection.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://techzenondev.com/apnatai/api/blogs-home');

        if (response.data.status) {
          // 💥 Sirf wahi blogs jinka is_home = 1
          const filtered = response.data.data.data.filter(
            (item) => item.is_home === 1
          );

          setBlogPosts(filtered);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // HTML tags remove karne ke liye helper function
  const stripHTML = (html) => {
    return html ? html.replace(/<[^>]+>/g, '') : '';
  };

  return (
    <>
      <div className="blog-section">
        <div className="fancy-mainheading">
          <h2>
            Latest <span>Blog Posts</span>
          </h2>
        </div>

        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-img">
              <Image
                src={`https://techzenondev.com/apnatai/public/${post.image}`}
                width={500}
                height={300}
                alt={post.title}
              />
            </div>

            <div className="blog-content">
              <div className="blog-date">
                <h2>{new Date(post.publish_date).getDate()}</h2>
                <p>{new Date(post.publish_date).toLocaleString('default', { month: 'short' })}</p>
              </div>

              <div className="blog-details">
                <h3 className="blog-title">{post.title}</h3>

                <p className="blog-desc">
                  {stripHTML(post.description)}
                </p>

              </div>
            </div>
          </div>
        ))}

        {/* Agar koi bhi is_home = 1 wala blog nahi mila */}
        {blogPosts.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>No blog posts available.</p>
        )}
      </div>
    </>
  );
}
