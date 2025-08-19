import React from "react";
import "../Css/Profile.css";
import lotus from "../Image/lotus.jpg";

export default function Profile() {
  
  const user = {
    name: "Afifah Maksurah",
    email: "afifamaksura@gmail.com",
    joined: "15-01-2025",
    role: "Author",
    location: "Dhaka, Bangladesh",
    bio: "Fiction writer focusing on character-driven stories and dialogue.",
    
  };

  return (
    <section className="profile-card">
      <div className="profile-container">
        <h1>My Profile</h1>
        <img src={lotus} alt="Profile" className="profile-img"/>
        
      </div>

      <div className="profile-grid">
        <div className="field">
          <span className="label">Author</span>
          <span className="value">{user.name}</span>
        </div>
        </div>

      <div className="profile-grid">
        <div className="field">
          <span className="label">Email</span>
          <span className="value">{user.email}</span>
        </div>
        <div className="field">
          <span className="label">Joined</span>
          <span className="value">
            {user.joined}
          </span>
        </div>
        <div className="field">
          <span className="label">Location</span>
          <span className="value">{user.location}</span>
        </div>
        <div className="field full">
          <span className="label">Bio</span>
          <span className="value">{user.bio}</span>
        </div>
      </div>
    </section>
  );
}
