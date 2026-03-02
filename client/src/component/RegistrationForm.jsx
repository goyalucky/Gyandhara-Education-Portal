import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    city: "",
    school: "",
    board: "",
    class: "",
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Form Data Submitted: ", data);
        // Navigate to sidebar page after successful registration
        navigate('/sidebar');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-2/5 border-2 border-blue-500"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>

        <label className="block text-gray-700 mb-2">Enter your name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block text-gray-700 mb-2">SELECT STATE</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>Select State</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          <option value="state3">State 3</option>
        </select>

        <label className="block text-gray-700 mb-2">SELECT CITY</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>Select City</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
          <option value="city3">City 3</option>
        </select>

        <label className="block text-gray-700 mb-2">SCHOOL</label>
        <select
          name="school"
          value={formData.school}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>Select School</option>
          <option value="school1">School 1</option>
          <option value="school2">School 2</option>
          <option value="school3">School 3</option>
        </select>

        <label className="block text-gray-700 mb-2">BOARD</label>
        <select
          name="board"
          value={formData.board}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>Select Board</option>
          <option value="board1">Board 1</option>
          <option value="board2">Board 2</option>
          <option value="board3">Board 3</option>
        </select>

        <label className="block text-gray-700 mb-2">CLASS</label>
        <select
          name="class"
          value={formData.class}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>Select Class</option>
          <option value="class1">Class 1</option>
          <option value="class2">Class 2</option>
          <option value="class3">Class 3</option>
        </select>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
