import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
  
      localStorage.setItem("userEmail", email);
      alert("Login successful!");
      navigate("/thoughts");
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong");
    }
  };
  

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/">Signup</Link></p>
    </div>
  );
};

export default Login;
// import React, { useState } from 'react';
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import '../css/Login.css';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/login", { email, password });

//       if (response.status === 200) {
//         alert("Login successful!");
//         localStorage.setItem("email", email);
//         navigate("/thoughts");
//       } else {
//         alert("Invalid email or password.");
//       }
//     } catch (err) {
//       console.error("Login Error:", err.response?.data || err.message);
//       alert("Login failed. Check console for details.");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
