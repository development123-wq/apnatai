"use client";
import { useState } from "react";
import "./LeaveReply.css"; 

export default function LeaveReply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✔ Add API logic here if needed  
    console.log("Form Submitted:", formData);
    alert("Your comment has been submitted!");

    // Clear form
    setFormData({ name: "", email: "", website: "", comment: "" });
  };

  return (
    <div className="reply-container" style={{maxWidth:'1200px',margin:'auto',marginBottom:'20px'}}>
      <h2>Leave a Reply</h2>

      <form className="reply-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Enter your website (optional)"
          />
        </div>

        <div className="form-group">
          <label>Comments *</label>
          <textarea
            name="comment"
            required
            value={formData.comment}
            onChange={handleChange}
            placeholder="Write your comment..."
          ></textarea>
        </div>

        <button type="submit" className="reply-btn">
          Submit Comment
        </button>
      </form>
    </div>
  );
}
