import React, { useState } from 'react';
import axios from 'axios';
import './TaskForm.css'; // Import the CSS

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDate };

    axios.post('http://localhost:5000/api/tasks', newTask)
      .then(() => {
        window.location.href = '/';
      })
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
