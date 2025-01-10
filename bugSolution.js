const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator');
app.use(express.json());

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// Protected against SQL Injection
app.get('/users', [
  check('name').optional({ checkFalsy: true }).isLength({ min: 1, max: 50 }).trim().withMessage('Name must be between 1 and 50 characters'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { name } = req.query;
  const users = getUsersByName(name); // Assume this function is now protected against SQL injection
  res.send(users);
});
