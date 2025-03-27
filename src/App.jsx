import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import "./App.css"; 
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Community from "./pages/Community";
import Explore from "./pages/Explore";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setShowSidebar(false);
        setShowRightSidebar(false);
      }
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Router>
      <div className="app-layout">
        {/* Mobile View: Show Toggle Buttons */}
        {isMobile && (
          <>
            <button className="menu-btn left" onClick={() => setShowSidebar(!showSidebar)}>☰</button>
            <button className="menu-btn right" onClick={() => setShowRightSidebar(!showRightSidebar)}>☰</button>
          </>
        )}

        {/* Sidebar (Both Laptop & Mobile) */}
        <Sidebar show={showSidebar || !isMobile} onClose={() => setShowSidebar(false)} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/communities" element={<Community />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Right Sidebar (Both Laptop & Mobile) */}
        <RightSidebar show={showRightSidebar || !isMobile} onClose={() => setShowRightSidebar(false)} />
      </div>
    </Router>
  );
};

export default App;
