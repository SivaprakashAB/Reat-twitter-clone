import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/json/profile.json")
      .then((response) => response.json())
      .then((data) => setProfile(data[0])) // Assuming the JSON contains one user
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  return (
    <div className="profile-wrapper">
      {/* Profile Header */}
      <div className="profile-header">
        <h1>Profile</h1>
      </div>

      {profile ? (
        <div className="profile-card">
          <img src={profile.profilePic} alt="Profile" className="profile-avatar" />
          <h2 className="profile-name">{profile.user}</h2>
          <p className="profile-handle">{profile.handle}</p>

          {/* About Section */}
          <div className="profile-about">
            <p>
              {profile.about || "Hello! I'm passionate about technology and always exploring new innovations."}
            </p>
          </div>

          {/* Profile Details - Showing Only Followers & Following */}
          <div className="profile-details">
            <div className="profile-stats">
              <p><span>{profile.followers}</span> Followers</p>
              <p><span>{profile.following}</span> Following</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
