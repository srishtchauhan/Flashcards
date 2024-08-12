import React, { useState } from 'react';
import axios from 'axios';

function Form({ refreshTodos }) {
  const [data, setData] = useState({
    title: '',
    description: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function senddata(event) {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/create', {
        title: data.title,
        description: data.description,
      });

      alert('Todo added');
      setData({ title: '', description: '' }); // Clear the form
      refreshTodos(); // Refresh the todo list
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }

  return (
    <form onSubmit={senddata} className="flex flex-col bg-white rounded-lg shadow-lg max-w-md mx-auto p-6 my-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Todo</h2>
      <div className="mb-4 flex flex-col">
        <label htmlFor="title" className="text-gray-700 font-medium mb-1">Question</label>
        <input
          type="text"
          placeholder="Enter your title here"
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="description" className="text-gray-700 font-medium mb-1">Answer</label>
        <textarea
          name="description"
          id="description"
          placeholder="Enter the description here"
          value={data.description}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add a new question
      </button>
    </form>
  );
}

export default Form;
