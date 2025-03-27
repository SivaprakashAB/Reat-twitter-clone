import React, { useState, useEffect } from "react";
import "./Feed.css"; // Import CSS
import { FaHeart, FaRetweet, FaComment } from "react-icons/fa"; // Icons

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("forYou");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [commentInputs, setCommentInputs] = useState({}); // Track comment inputs
  const [showCommentBox, setShowCommentBox] = useState({}); // Track which post has comment box open

  // Fetch posts
  useEffect(() => {
    fetch("/json/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Filter posts based on active tab
  useEffect(() => {
    setFilteredPosts(posts.filter((post) => post.category === activeTab));
  }, [posts, activeTab]);

  // Handle Like Click
  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
          : post
      )
    );
  };

  // Handle Retweet Click
  const handleRetweet = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, retweets: post.isRetweeted ? post.retweets - 1 : post.retweets + 1, isRetweeted: !post.isRetweeted }
          : post
      )
    );
  };

  // Toggle comment input box
  const toggleCommentBox = (id) => {
    setShowCommentBox((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Handle comment input change
  const handleCommentChange = (id, text) => {
    setCommentInputs((prev) => ({ ...prev, [id]: text }));
  };

  // Handle submit comment
  const handleCommentSubmit = (id) => {
    if (!commentInputs[id]) return; // Prevent empty comments

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [...post.comments, { user: "User123", text: commentInputs[id] }], // Adding comment
            }
          : post
      )
    );

    // Clear input field after submitting
    setCommentInputs((prev) => ({ ...prev, [id]: "" }));
    setShowCommentBox((prev) => ({ ...prev, [id]: false })); // Hide input box after submit
  };

  return (
    <div className="feed-container">
      {/* Tabs */}
      <div className="tab-menu">
        <button className={activeTab === "forYou" ? "active" : ""} onClick={() => setActiveTab("forYou")}>
          For You
        </button>
        <button className={activeTab === "following" ? "active" : ""} onClick={() => setActiveTab("following")}>
          Following
        </button>
      </div>

      {/* Posts */}
      <div className="posts">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="post">
              {/* Profile Picture */}
              <img src={post.profilePic} alt={post.user} className="profile-pic" />

              <div className="post-content">
                <h3>
                  {post.user} <span>{post.handle}</span>
                </h3>
                <p>{post.content}</p>

                {/* Engagement Section */}
                <div className="engagement">
                  <span onClick={() => handleLike(post.id)} style={{ color: post.isLiked ? "red" : "black" }}>
                    <FaHeart /> {post.likes}
                  </span>
                  <span onClick={() => handleRetweet(post.id)} style={{ color: post.isRetweeted ? "green" : "black" }}>
                    <FaRetweet /> {post.retweets}
                  </span>
                  <span onClick={() => toggleCommentBox(post.id)}>
                    <FaComment /> {post.comments.length}
                  </span>
                </div>

                {/* Comment Input Box */}
                {showCommentBox[post.id] && (
                  <div className="comment-box">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={commentInputs[post.id] || ""}
                      onChange={(e) => handleCommentChange(post.id, e.target.value)}
                    />
                    <button onClick={() => handleCommentSubmit(post.id)}>Submit</button>
                  </div>
                )}

                {/* Comments Section */}
                {post.comments.length > 0 && (
                  <div className="comments-section">
                    <h4>Comments:</h4>
                    {post.comments.map((comment, index) => (
                      <p key={index}>
                        <strong>{comment.user}:</strong> {comment.text}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
