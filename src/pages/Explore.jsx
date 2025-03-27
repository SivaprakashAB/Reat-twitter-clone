import React, { useState, useEffect } from "react";
import "./Explore.css"; // Import the external CSS file

const Explore = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/json/trending.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        if (jsonData.posts && Array.isArray(jsonData.posts)) {
          setTopics(jsonData.posts);
        } else {
          throw new Error("Invalid JSON structure");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="explore-container">
      <h1 className="explore-title">Trending Topics</h1>
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">Error: {error}</p>}
      {!loading && !error && topics.length > 0 ? (
        <div className="topics-list">
          {topics.map((topic) => (
            <div key={topic.topic} className="topic-card">
              <h2 className="topic-title">{topic.topic}</h2>
              {topic.posts.map((post, index) => (
                <div key={post.id} className={`post-card ${index % 2 === 0 ? "even" : "odd"}`}>
                  <div className="post-header">
                    <img src={post.profilePic} alt="User" className="profile-pic" />
                    <div>
                      <strong className="user-name">{post.user}</strong>
                      <span className="user-handle">{post.handle}</span>
                    </div>
                  </div>
                  <p className="post-content">{post.content}</p>
                  <p className="post-stats">❤️ {post.likes} | 🔄 {post.retweets}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && <p className="no-posts">No posts available.</p>
      )}
    </div>
  );
};

export default Explore;
