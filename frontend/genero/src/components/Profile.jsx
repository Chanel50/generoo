
import React, { useState } from 'react';
import axios from 'axios';

const Profile = ({id}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8000/api/user/${id}`, {
        name,
        email,
        password,
      });

      const { success, message, data } = response.data;
      if (success) {
        setSuccessMessage(message);
        // Handle the updated user data here if needed
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data.error || 'An error occurred while updating the user'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-gray-700">
          Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-gray-700">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Update User
        </button>
      </div>
      {errorMessage && (
        <div className="text-red-500 mb-4">
          <p>{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div className="text-green-500 mb-4">
          <p>{successMessage}</p>
        </div>
      )}
    </form>
  );
};

export default Profile;
