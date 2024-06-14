
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Mongoose connection
mongoose
  .connect("mongodb+srv://lava1:lava%401@cluster0.wqes9yw.mongodb.net/task-manager", {

  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


