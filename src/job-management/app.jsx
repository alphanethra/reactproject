import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import EmployerJobManagement from "./EmployerJobManagement";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  function handleLogin(email, password) {
    if (email === "employer@example.com" && password === "password123") {
      const loggedUser = { email, role: "employer", token: "mock-jwt-token" };
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
      return true;
    }
    return false;
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={user ? "/jobs" : "/login"} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/jobs"
          element={
            user ? (
              <EmployerJobManagement onLogout={handleLogout} user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
