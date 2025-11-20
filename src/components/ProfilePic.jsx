// src/components/ProfilePic.jsx
import React from "react";
import "./ProfilePic.css"

const ProfilePic = () => {
  return (
    <div className="avatar-ring">
      <div
        className="avatar"
        style={{ backgroundImage: `url('/profile.jpg')` }}
      />
    </div>
  );
};

export default ProfilePic;
