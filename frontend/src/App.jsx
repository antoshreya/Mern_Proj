
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Thoughts from "./components/Thoughts";
import BlogSuggestions from "./components/BlogSuggestions";

const App = () => {
  const isLoggedIn = localStorage.getItem("userEmail");

  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Signup />} />

        
        <Route path="/login" element={<Login />} />

        <Route
          path="/thoughts"
          element={isLoggedIn ? <Thoughts /> : <Navigate to="/login" />}
        />

      
        <Route
          path="/blogs"
          element={isLoggedIn ? <BlogSuggestions /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
