const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// Vulnerable to SQL Injection if used with a database
app.get('/users', (req, res) => {
  const { name } = req.query; // Vulnerable if used directly in a database query
  // Missing input validation
  const users = getUsersByName(name); // Assume this function queries a database
  res.send(users);
});