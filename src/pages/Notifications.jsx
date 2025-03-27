import React, { useEffect, useState } from "react";
import "./Notifications.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [followingNotifications, setFollowingNotifications] = useState([]);

  useEffect(() => {
    // Simulating fetching JSON data
    fetch("/json/Notifications.json")
      .then((response) => response.json())
      .then((data) => {
        setNotifications(data.notifications);
        setFollowingNotifications(
          data.notifications.filter((notif) => notif.isFollowing)
        );
      })
      .catch((error) => console.error("Error loading notifications:", error));
  }, []);

  return (
    <div className="notifications-container">
      {/* All Notifications */}
      <div className="notifications-column">
        <h2>All Notifications</h2>
        {notifications.map((notif) => (
          <div key={notif.id} className="notification-card">
            <strong>{notif.user}</strong> {notif.message}
            <div className="time">{notif.time}</div>
          </div>
        ))}
      </div>

      {/* Following Notifications */}
      <div className="notifications-column">
        <h2>Following</h2>
        {followingNotifications.length > 0 ? (
          followingNotifications.map((notif) => (
            <div key={notif.id} className="notification-card">
              <strong>{notif.user}</strong> {notif.message}
              <div className="time">{notif.time}</div>
            </div>
          ))
        ) : (
          <p>No notifications from followed users</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
