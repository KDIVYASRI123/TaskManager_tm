import React, { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [plan, setPlan] = useState("Premium");

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "20px" }}>
        ⚙️ Settings
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "500px",
        }}
      >
        {/* Dark Mode */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h4 style={{ margin: 0 }}>Dark Mode</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>
              Enable dark theme for the dashboard
            </p>
          </div>
          <label style={{ cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              style={{ display: "none" }}
            />
            <span
              style={{
                display: "inline-block",
                width: "40px",
                height: "20px",
                background: darkMode ? "#ff7a00" : "#ddd",
                borderRadius: "20px",
                position: "relative",
                transition: "0.3s",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "2px",
                  left: darkMode ? "22px" : "2px",
                  width: "16px",
                  height: "16px",
                  background: "white",
                  borderRadius: "50%",
                  transition: "0.3s",
                }}
              ></span>
            </span>
          </label>
        </div>

        {/* Notifications */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h4 style={{ margin: 0 }}>Notifications</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>
              Receive email & push notifications
            </p>
          </div>
          <label style={{ cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              style={{ display: "none" }}
            />
            <span
              style={{
                display: "inline-block",
                width: "40px",
                height: "20px",
                background: notifications ? "#ff7a00" : "#ddd",
                borderRadius: "20px",
                position: "relative",
                transition: "0.3s",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "2px",
                  left: notifications ? "22px" : "2px",
                  width: "16px",
                  height: "16px",
                  background: "white",
                  borderRadius: "50%",
                  transition: "0.3s",
                }}
              ></span>
            </span>
          </label>
        </div>

        {/* Plan */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <h4 style={{ margin: "0 0 6px" }}>Plan</h4>
          <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#666" }}>
            Your current subscription plan
          </p>
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            <option>Free</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
        </div>
      </div>
    </div>
  );
}
