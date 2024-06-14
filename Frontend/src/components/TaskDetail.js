import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './TaskDetail.css'; // Import the CSS

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tasks/${id}`)
      .then(response => setTask(response.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        window.location.href = '/';
      })
      .catch(error => console.log(error));
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="task-detail">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <Link to={`/tasks/edit/${task._id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <Link to="/">Back to Task List</Link>
    </div>
  );
};

export default TaskDetail;
