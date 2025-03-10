import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/lotti/profile.json"; 
import { getAuth } from "firebase/auth";

const ProfileSetup = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user)
  const [teamUsage, setTeamUsage] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to the next page after setup
    navigate("/select");
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">
        <h2 className="text-3xl text-[#9DC08B] font-semibold mb-6 text-left w-full">Create your profile</h2>

        {/* Profile Image */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={user?.photoURL || "https://i.ibb.co.com/Cs7ph5BW/9bf0f160-c5de-4553-a7be-90f3107088b6.jpg"}
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 border-gray-400"
          />
          <span className="text-lg text-[#9DC08B] font-medium">Looking good!</span>
        </div>

        {/* Name Input */}
        <label className="w-full text-gray-600">Your name</label>
        <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-red-400"
      readOnly={!isEditing}
      onClick={() => setIsEditing(true)} 
      onBlur={() => setIsEditing(false)} ></input>

        {/* Team Usage Toggle */}
        <div className="flex items-center justify-between w-full mt-4">
          <label className="">I want to use Todoist with my team</label>
          <input
            type="checkbox"
            className="toggle-checkbox hidden"
            checked={teamUsage}
            onChange={() => setTeamUsage(!teamUsage)}
          />
          <div
            className={`w-10 h-5 py-0.5 rounded-full cursor-pointer transition ${
              teamUsage ? "bg-[#3A7D44]" : "bg-gray-400"
            }`}
            onClick={() => setTeamUsage(!teamUsage)}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                teamUsage ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="mt-6 w-full bg-[#3A7D44] text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition"
        >
          Continue
        </button>
      </div>

      {/* Right Section (Lottie Animation) */}
      <div className="w-1/2 bg-white flex justify-center items-center">
        <Lottie animationData={animationData} className="w-3/4 h-3/4" />
      </div>
    </div>
  );
};

export default ProfileSetup;
