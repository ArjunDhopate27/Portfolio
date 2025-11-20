// src/components/ProfilePic.jsx
import React from "react";
import "./ProfilePic.css";
import dp from "../assets/images/Profilepic.jpeg";


const ProfilePic = () => {
  return (
    <div className="avatar-ring">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${dp})` }}
      />
    </div>
  );
};

export default ProfilePic;
