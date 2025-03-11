import React from "react";

const UserPage = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Farmer",
    location: "California, USA",
    profilePic: "https://via.placeholder.com/150",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-400 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src='images/man.png'
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-500"
          />
        </div>

        {/* User Details */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 text-lg">{user.email}</p>
          <p className="text-gray-700 mt-1">
            <span className="font-semibold">Role:</span> {user.role}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Location:</span> {user.location}
          </p>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
