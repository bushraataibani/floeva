import React from 'react'
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  },
  title: {
    color: "#9a4f50",
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  message: {
    fontSize: "1.25rem",
    color: "#9a4f50",
    marginBottom: "30px",
    textAlign: "center",
    maxWidth: "400px",
  },
  button: {
    backgroundColor: "#9a4f50",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};
const Onboarded = () => {
  const navigate = useNavigate();

  const handleGoToCalendar = () => {
    navigate("/calendar");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Yay! You’re onboarded! 🎉</h1>
      <p style={styles.message}>
        Congratulations on completing your onboarding process. You’re all set to get started!
      </p>
      <button style={styles.button} onClick={handleGoToCalendar}>
        Go to Calendar
      </button>
    </div>
  )
}

export default Onboarded