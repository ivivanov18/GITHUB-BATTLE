import React from "react";
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser
} from "react-icons/fa";

function ProfileList({ profile }) {
  return (
    <div>
      <ul className="card-list">
        <li>
          <FaUser color="rgb(239,115,115)" size={22} />
          {profile.name}
        </li>
        {profile.location && (
          <li>
            <FaCompass color="rgb(144,115,225)" size={22} />
            {profile.location}
          </li>
        )}
        {profile.company && (
          <li>
            <FaBriefcase color="#795548" size={22} />
            {profile.company}
          </li>
        )}
        <li>
          <FaUsers color="rgb(129,199,245)" size={22} />
          {profile.followers.toLocaleString()} followers
        </li>
        <li>
          <FaUserFriends color="rgb(64,195,1833)" size={22} />
          {profile.following.toLocaleString()} following
        </li>
      </ul>
    </div>
  );
}

export default ProfileList;
