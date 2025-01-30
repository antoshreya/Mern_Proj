// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../css/Signup.css';

// const Signup = () => {
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3001/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ firstname, lastname, email, password }),
//       });
  
//       const data = await response.json();
//       if (!response.ok) {
//         alert(data.message);
//         return;
//       }
  
//       alert("Signup successful! Please login.");
//       navigate("/login");
//     } catch (error) {
//       console.error("Signup Error:", error);
//       alert("Something went wrong");
//     }
//   };
  

//   return (
//     <div className="form-container">
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <label>First Name:</label>
//         <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />

//         <label>Last Name:</label>
//         <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required />

//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//         <button type="submit">Signup</button>
//       </form>
//       <p>Already have an account? <Link to="/login">Login</Link></p>
//     </div>
//   );
// };



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Signup.css';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });

      const data = await response.json(); // Parse the JSON response

      if (!response.ok) {
        alert(data.message || "Signup failed. Please try again.");
        return;
      }

      alert("Signup successful! Please login.");
      navigate("/login");

    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label>First Name:</label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
