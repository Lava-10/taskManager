import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EditTask.css'; // Import the CSS

const EditTask = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tasks/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDueDate(new Date(response.data.dueDate).toISOString().split('T')[0]);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { title, description, dueDate };

    axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask)
      .then(() => {
        window.location.href = `/tasks/${id}`;
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
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
