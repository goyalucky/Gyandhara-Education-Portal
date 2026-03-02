import React from 'react';

const Settings = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-4">Account</h2>

          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-700">Profile Image</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit profile image
            </button>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-700">Name</p>
            <span className="text-gray-900">Student Name</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit name
            </button>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-700">Username</p>
            <span className="text-gray-900">https://smartschoolhub.com/@username</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit username
            </button>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-700">Email</p>
            <span className="text-gray-900">student@example.com</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit email
            </button>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-700">Mobile Number</p>
            <span className="text-gray-900">+91 XXXXXXXXXX</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit number
            </button>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-700">State of Residence</p>
            <span className="text-gray-900">State</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit state
            </button>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-700">Delete Account</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;