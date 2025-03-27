import React from "react";
import "./Community.css"; // Importing the CSS file

const Community = () => {
  return (
    <div className="community-page">
     

      {/* Main Content */}
      <div className="community-container">
        <h1>Community Discussions</h1>

        <div className="discussion-card">
          <h3>How to improve coding skills?</h3>
          <p>John Doe - 2 hours ago</p>
          <span>15 replies</span>
        </div>

        <div className="discussion-card">
          <h3>Best resources for React?</h3>
          <p>Jane Smith - 5 hours ago</p>
          <span>8 replies</span>
        </div>

        <div className="discussion-card">
          <h3>Tips for debugging JavaScript</h3>
          <p>Emily Johnson - 1 day ago</p>
          <span>12 replies</span>
        </div>
      </div>
    </div>
  );
};

export default Community;
