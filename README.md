# Uncommon Express.js Bugs

This repository demonstrates two uncommon but important bugs that can occur in Express.js applications:

1. **Missing Error Handling:** The `/users/:id` route lacks proper error handling for cases where the `userId` is not a valid number or if a user with the specified ID does not exist.
2. **SQL Injection Vulnerability:** The `/users` route is vulnerable to SQL injection if the `name` query parameter is used directly in a database query without proper sanitization.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `node bug.js` to start the server.
4. Test the endpoints using a tool like Postman or curl.

## Solutions

The `bugSolution.js` file provides solutions for both bugs. The solutions demonstrate how to add robust error handling and prevent SQL injection by using parameterized queries or input validation.

## Lessons Learned

* Always validate user inputs.
* Implement comprehensive error handling to gracefully handle unexpected scenarios.
* Use parameterized queries or other appropriate techniques to prevent SQL injection and other database-related vulnerabilities.