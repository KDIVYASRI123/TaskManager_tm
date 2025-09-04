import React, { useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([
    { sender: "Mentor", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { sender: "You", text: input }]);
    setInput("");

    // Auto-reply (for demo)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "Mentor", text: "Got it! I'll get back to you soon." },
      ]);
    }, 1000);
  };

  return (
    <div className="content">
      <div className="topbar">
        <h2 className="title">Messages</h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "70vh",
          border: "1px solid #eee",
          borderRadius: "12px",
          padding: "16px",
          background: "#fff",
        }}
      >
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                alignSelf: msg.sender === "You" ? "flex-end" : "flex-start",
                background: msg.sender === "You" ? "#ff7a00" : "#f1f1f1",
                color: msg.sender === "You" ? "white" : "black",
                padding: "8px 12px",
                borderRadius: "12px",
                maxWidth: "60%",
              }}
            >
              <strong>{msg.sender}: </strong>
              {msg.text}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleSend}
            className="btn primary"
            style={{ borderRadius: "8px" }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
