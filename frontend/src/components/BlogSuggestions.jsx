
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogSuggestions = () => {
  const navigate = useNavigate();
  const [userThoughts, setUserThoughts] = useState("");

  useEffect(() => {
    
    const storedThought = sessionStorage.getItem("thought") || localStorage.getItem("thought") || "";
    console.log("Retrieved Thought from Storage:", storedThought); 
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
