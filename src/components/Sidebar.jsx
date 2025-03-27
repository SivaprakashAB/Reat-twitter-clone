import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json/profile.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data[0]); // Extract first user object
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  

  if (!userData) {
    return error ? (
      <p>Error: {error}</p>
    ) : (
      <p>Loading...</p>
    );
  }

  return (
      <div className="sidebar">
      {/* Logo */}
      <img src="/Twit_logo.jpeg" alt="Logo" 
        style={{ width: "80px", height: "100px", borderRadius: "50%" }}  />
        <h2 style = {{ alignItems : "center" , color : "gray" }}> Twitter </h2>

      {/* Sidebar Navigation */}
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" className={({ isActive }) => isActive ? "active" : ""}>
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" className={({ isActive }) => isActive ? "active" : ""}>
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/communities" className={({ isActive }) => isActive ? "active" : ""}>
            Communities
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
            Profile
          </NavLink>
        </li>
      </ul>

    {/* User Profile Section */}
    <div className="userProfile" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img 
        src={userData.profilePic} 
        alt={`${userData.name} Profile`} 
        style={{ width: "40px", height: "40px", borderRadius: "50%" }} 
      />
      <div>
        <p>{userData.user}</p>
        <p style={{ fontSize: "12px", color: "#777" }}> {userData.id}</p>
      </div>
    </div>

     </div>
  );
};

export default Sidebar;