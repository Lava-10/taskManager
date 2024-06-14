import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TaskList.css'; // Import the CSS

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <Link to="/tasks/new">
        <button>Add New Task</button>
      </Link>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id}>
            <Link to={`/tasks/${task._id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
