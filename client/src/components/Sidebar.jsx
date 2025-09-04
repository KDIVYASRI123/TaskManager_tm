import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ onLogout }) {
  const linkStyle = ({ isActive }) => ({
    textAlign: "left",
    border: 0,
    background: "transparent",
    padding: "10px 12px",
    borderRadius: "10px",
    fontWeight: 600,
    color: isActive ? "#111" : "#333",
    backgroundColor: isActive ? "#fff1e6" : "transparent",
    marginBottom: "8px",
    cursor: "pointer",
    width: "100%",
    textDecoration: "none", // ✅ remove underline
    display: "block",       // ✅ make full clickable area
  });

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-badge">TM</div>
        Task Manager
      </div>
      <div className="menu">
        <NavLink to="/" style={linkStyle}>
          Overview
        </NavLink>
        <NavLink to="/mentors" style={linkStyle}>
          Mentors
        </NavLink>
        <NavLink to="/settings" style={linkStyle}>
          Settings
        </NavLink>
        <NavLink to="/messages" style={linkStyle}>
          Messages
        </NavLink>
      </div>
      <div style={{ marginTop: "auto" }}>
        <button onClick={onLogout} className="menu" style={{ width: "100%" }}>
          <span className="btn secondary" style={{ width: "100%" }}>
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}
