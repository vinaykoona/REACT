// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");
  const navigate = useNavigate();


  const validatePassword = (password) => {
    const minLength = /.{6,}/;  // Minimum 6 characters
    const hasUppercase = /[A-Z]/;  // At least one uppercase letter
    const hasNumber = /[0-9]/;  // At least one number
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;  // At least one special character

    if (!minLength.test(password)) {
      return "Password must be at least 6 characters long.";
    }
    if (!hasUppercase.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasNumber.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!hasSpecialChar.test(password)) {
      return "Password must contain at least one special character.";
    }
    return "";  // Password is valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }
    // For simplicity, we will just check for non-empty fields
    if (email && password) {
        alert("login successful!");
      // Redirect to HomePage upon successful login
      navigate("/home");
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/Reg">Register</a>
      </p>
    </div>
  );
};

export default Login;