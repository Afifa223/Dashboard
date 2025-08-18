import React from "react";
import "../Css/Sidebar.css";

export default function Sidebar({
  activePage,
  setActivePage,
  isOpen,
  toggleSidebar,
}) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
        {isOpen ? "⟨⟨" : "⟩⟩"}
      </button>

      <ul className="nav-list">
        <li
          className={`nav-item ${activePage === "profile" ? "active" : ""}`}
          onClick={() => setActivePage("profile")}
        >
          <span className="icon">👤</span>
          {isOpen && <span className="label">Profile</span>}
        </li>

        <li
          className={`nav-item ${activePage === "articles" ? "active" : ""}`}
          onClick={() => setActivePage("articles")}
        >
          <span className="icon">📝</span>
          {isOpen && <span className="label">My Articles</span>}
        </li>
      </ul>
    </aside>
  );
}
