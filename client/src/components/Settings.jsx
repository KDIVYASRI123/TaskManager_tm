import React from "react";

export default function Settings() {
  const randomData = ["Dark Mode: On", "Notifications: Enabled", "Plan: Premium"];
  
  return (
    <div style={{ padding: "20px" }}>
      <h2>⚙️ Settings Page</h2>
      <ul>
        {randomData.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
