import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Article from "./components/Article";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("profile");
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app-container">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen((s) => !s)}
      />

      <main className="content">
        {activePage === "profile" && <Profile />}
        {activePage === "articles" && <Article />}
      </main>
    </div>
  );
}
