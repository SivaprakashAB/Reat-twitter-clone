import React, { useState } from "react";
import jsonData from "/public/json/Trending_Topic.json"; // Import JSON file
import "./RightSidebar.css"; // Import CSS file

const RightSidebar = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Find posts based on the selected topic
  const filteredPosts = jsonData.posts.find((p) => p.topic === selectedTopic);

  return (
    <div className="right-sidebar">
      {/* Trending Topics Section */}
      <h2 className="sidebar-title"> Trending Topics</h2>
      <ul className="trending-list">
  {jsonData.trendingTopics.map((topic, index) => (
    <li
      key={index}
      onClick={() => setSelectedTopic(topic)}
      className={`trending-item ${selectedTopic === topic ? "active" : ""}`}
    >
      {topic}
    </li>
  ))}
</ul>


      {/* Display Posts When a Topic is Selected */}
      <div className="posts-section">
        {selectedTopic ? (
          <>
            <h2 className="posts-title">{selectedTopic}</h2>
            {filteredPosts?.posts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <img src={post.profilePic} alt="Profile" className="profile-pic" />
                  <div className="post-user-info">
                    <span className="post-user-name">{post.user}</span>
                    <span className="post-user-handle">{post.handle}</span>
                  </div>
                </div>
                <p className="post-content">{post.content}</p>
                <div className="post-actions">
                  <span>❤️ {post.likes}</span>
                  <span>🔁 {post.retweets}</span>
                </div>
                <div>
                  <strong>Comments:</strong>
                  <ul>
                    {post.comments.map((comment, idx) => (
                      <li key={idx} className="post-comment">
                        {comment}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="no-posts">Select a trending topic to see posts.</p>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
