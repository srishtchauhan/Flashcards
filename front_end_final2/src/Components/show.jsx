
import React, { useState } from 'react';
import axios from 'axios';

function Show({ title, description, keyVal, refreshTodos }) {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState({ title, description });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleEdit() {
    try {
      await axios.put(`https://flashcards-id03.onrender.com/editData/${keyVal}`, {
        title: data.title,
        description: data.description,
      });
      setIsActive(false);
      refreshTodos(); // Refresh the list after editing
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(`https://flashcards-id03.onrender.com/deleteData/${keyVal}`);
      refreshTodos(); // Refresh the list after deleting
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 mx-2 my-4 max-w-xs">
      <h2 className="text-xl font-semibold mb-4 text-gray-800"></h2>
      {isActive ? (
        <div className="flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Edit Title"
            value={data.title}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="description"
            placeholder="Edit Description"
            value={data.description}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="text-gray-800 font-medium mb-2">Question: {title}</p>
          <p className="text-gray-600 mb-4">Answer: {description}</p>
          <button
            onClick={() => setIsActive(true)}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          >
            Edit
          </button>
        </div>
      )}
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Delete
      </button>
    </div>
  );
}

export default Show;
