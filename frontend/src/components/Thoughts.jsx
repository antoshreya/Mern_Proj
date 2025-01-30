

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/Thoughts.css";

// const Thoughts = () => {
//   const [thought, setThought] = useState("");
//   const navigate = useNavigate();
//   const userEmail = localStorage.getItem("userEmail"); 

//   useEffect(() => {
//     if (!userEmail) {
//       alert("Please login first!");
//       navigate("/login");
//     }
//   }, [userEmail, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!thought) {
//       alert("Please share your thought.");
//       return;
//     }

//     try {
//       const response = await fetch("https://mern-proj-1vx4.onrender.com/thoughts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: userEmail, thought }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Thought saved successfully!");
//         navigate("/blogs"); 
//       } else {
//         alert(data.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error("Error saving thought:", error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>What's on your mind today?</h2>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           rows="5"
//           value={thought}
//           onChange={(e) => setThought(e.target.value)}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Thoughts;

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!thought) {
    alert("Please share your thought.");
    return;
  }

  try {
    localStorage.setItem("thought", thought); // Store thought in local storage

    const response = await fetch("https://mern-proj-1vx4.onrender.com/thoughts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, thought }),
    });

    const data = await response.json();
    console.log("Server response:", data); // Debugging

    if (response.ok) {
      alert("Thought saved successfully!");
      navigate("/blogs"); // Navigate to the blog suggestion page
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Error saving thought:", error);
    alert("Something went wrong");
  }
};
