import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Registration successful!");
      // You can send this data to a server here
      console.log("Registered with:", { email, password });

      setTimeout(() => {
        navigate("/");
      }, 1500);

    }
  };

  return (
    <div >
      <h2>Register</h2>
      <form onSubmit={handleSubmit} >
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p >{error}</p>}
        {success && <p >{success}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register