import React from "react";
import "../Css/Profile.css";

export default function Profile() {
  // Dummy user data (you can replace with real data later)
  const user = {
    name: "Sophia Carter",
    email: "sophia.carter@example.com",
    joined: "2023-01-15",
    role: "Author",
    location: "Austin, TX",
    bio: "Fiction writer focusing on character-driven stories and dialogue.",
    avatar: "https://i.pravatar.cc/160?img=47",
  };

  return (
    <section className="profile-card">
      <div className="profile-header">
        <img className="profile-avatar" src={user.avatar} alt="Profile" />
        <div>
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-role">{user.role}</p>
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
            {new Date(user.joined).toLocaleDateString()}
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
