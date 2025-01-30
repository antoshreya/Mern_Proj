// // import "../css/BlogSuggestions.css"; 
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// // const BlogSuggestions = () => {
// //   const navigate = useNavigate();
// //   const [userThoughts, setUserThoughts] = useState("");
// //   const [suggestedBlogs, setSuggestedBlogs] = useState([]);
// //   const userEmail = localStorage.getItem("userEmail");

// //   // Retrieve thoughts from backend when component mounts
// //   useEffect(() => {
// //     if (userEmail) {
// //       fetch(`http://localhost:3001/thoughts/${userEmail}`)
// //         .then(response => response.json())
// //         .then(data => {
// //           if (data.length > 0) {
// //             setUserThoughts(data[data.length - 1].thought);
// //             setSuggestedBlogs(data[data.length - 1].suggestedBlogs);
// //           }
// //         })
// //         .catch(error => console.error("Error fetching thoughts:", error));
// //     }
// //   }, [userEmail]);
  

// //   // Save Thought to Backend
// //   const saveThoughtToBackend = async () => {
// //     if (!userEmail) return alert("Please login first");

// //     try {
// //       const response = await fetch("http://localhost:3001/thoughts", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email: userEmail, thought: userThoughts }),
// //       });

// //       if (response.ok) {
// //         alert("Thought saved successfully!");
// //         window.location.reload(); // Refresh to show updated suggestions
// //       } else {
// //         alert("Failed to save thought");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("Something went wrong");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Blog Suggestions</h2>
      
// //       {/* Input field for thought */}
// //       <textarea
// //         value={userThoughts}
// //         onChange={(e) => setUserThoughts(e.target.value)}
// //         placeholder="Enter your thought..."
// //       />

// //       <button onClick={saveThoughtToBackend}>Save Thought</button>

// //       {/* Display blog suggestions */}
// //       <h3>Suggested Blogs:</h3>
// //       {suggestedBlogs.length > 0 ? (
// //         <ul>
// //           {suggestedBlogs.map((blog, index) => (
// //             <li key={index}>{blog}</li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No specific blogs found. Try different words!</p>
// //       )}

// //       <button onClick={() => navigate("/")}>Back to Home</button>
// //     </div>
// //   );
// // };

// // export default BlogSuggestions;
// import "../css/BlogSuggestions.css"; 
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const BlogSuggestions = () => {
//   const navigate = useNavigate();
//   const [userThoughts, setUserThoughts] = useState("");

 
//   useEffect(() => {
//     const storedThought = localStorage.getItem("thought") || "";
//     setUserThoughts(storedThought);
//   }, []);

//   const blogs = [
//     { keyword: "happy", title: "Stay Happy!", link: "https://beinghappiness.com/top-50-blogs-on-happiness/" },
//     { keyword: "sad", title: "Overcoming Sadness", link: "https://www.emedihealth.com/mental-health/blogs-about-depression" },
//     { keyword: "stress", title: "Managing Stress", link: "https://www.emedihealth.com/mental-health/blogs-stress-relief" },
    
//     { keyword: "excited", title: "Harnessing Excitement", link: "https://positivepsychology.com/blogs-about-happiness/" },
//   ];

  
//   const suggestedBlogs = blogs.filter(blog =>
//     new RegExp(`\\b${blog.keyword}\\b`, "i").test(userThoughts)
//   );

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
//       <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 w-[80%] max-w-md text-white">
//         <h2 className="text-2xl font-bold text-center mb-4">Blog Suggestions</h2>

        
//         <p className="text-center text-gray-200 mb-3">
//           <strong>Your Thought:</strong> {userThoughts || "No thoughts provided."}
//         </p>

        
//         {suggestedBlogs.length > 0 ? (
//           <ul className="space-y-2">
//             {suggestedBlogs.map((blog, index) => (
//               <li key={index} className="text-center">
//                 <a href={blog.link} target="_blank" rel="noopener noreferrer"
//                   className="text-blue-300 hover:text-white transition duration-300 underline">
//                   {blog.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-center text-gray-300">No specific blogs found. Try different words!</p>
//         )}

        
//         <div className="flex justify-center mt-4">
//           <button onClick={() => navigate("/")}
//             className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-40 transition duration-300 rounded-lg">
//             Back to Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogSuggestions;
import "../css/BlogSuggestions.css"; 
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogSuggestions = () => {
  const navigate = useNavigate();
  const [userThoughts, setUserThoughts] = useState("");

  useEffect(() => {
    const storedThought = localStorage.getItem("thought") || "";
    setUserThoughts(storedThought);
  }, []);

  const blogs = [
    { keyword: "happy", title: "Stay Happy!", link: "https://beinghappiness.com/top-50-blogs-on-happiness/" },
    { keyword: "sad", title: "Overcoming Sadness", link: "https://www.emedihealth.com/mental-health/blogs-about-depression" },
    { keyword: "stress", title: "Managing Stress", link: "https://www.emedihealth.com/mental-health/blogs-stress-relief" },
    { keyword: "excited", title: "Harnessing Excitement", link: "https://positivepsychology.com/blogs-about-happiness/" },
  ];

  const suggestedBlogs = blogs.filter(blog =>
    new RegExp(`\\b${blog.keyword}\\b`, "i").test(userThoughts)
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="blog-container">
        <h2>Blog Suggestions</h2>
        <p><strong>Your Thought:</strong> {userThoughts || "No thoughts provided."}</p>
        
        {suggestedBlogs.length > 0 ? (
          <ul className="space-y-2">
            {suggestedBlogs.map((blog, index) => (
              <li key={index}>
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                  {blog.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No specific blogs found. Try different words!</p>
        )}

        <div className="flex justify-center mt-4">
          <button onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSuggestions;
