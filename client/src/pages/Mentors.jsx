import React, { useState } from "react";

export default function Mentors() {
  const mentorList = [
    {
      name: "Rama Krishna",
      expertise: "UI/UX Design",
      bio: "Krishna has 10+ years of experience in designing user-friendly interfaces and mobile apps.",
    },
    {
      name: "Raju Mandella",
      expertise: "Backend Development",
      bio: "Raju specializes in Node.js, databases, and building scalable backend systems.",
    },
    {
      name: "Sunitha Triveni",
      expertise: "Machine Learning",
      bio: "Sunitha works on AI and ML solutions, focusing on natural language processing.",
    },
    {
      name: "Kavya Dharani",
      expertise: "Cloud Architecture",
      bio: "Kavya is an expert in AWS, Azure, and designing secure cloud infrastructures.",
    },
  ];

  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "16px" }}>
        Mentors
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {mentorList.map((mentor, i) => (
          <div
            key={i}
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#ff7a00",
                color: "white",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
              }}
            >
              {mentor.name.charAt(0)}
            </div>
            <div style={{ fontWeight: "700", fontSize: "16px" }}>
              {mentor.name}
            </div>
            <div style={{ fontSize: "14px", color: "#666" }}>
              {mentor.expertise}
            </div>
            <button
              style={{
                marginTop: "auto",
                padding: "8px 12px",
                background: "#ff7a00",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() => setSelectedMentor(mentor)}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Profile Modal */}
      {selectedMentor && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            className="modal"
            style={{
              width: "400px",
              background: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: "0 0 10px" }}>{selectedMentor.name}</h3>
            <p style={{ fontWeight: "600", marginBottom: "8px" }}>
              {selectedMentor.expertise}
            </p>
            <p style={{ fontSize: "14px", color: "#555" }}>
              {selectedMentor.bio}
            </p>
            <button
              onClick={() => setSelectedMentor(null)}
              style={{
                marginTop: "16px",
                padding: "8px 12px",
                background: "#ff7a00",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
