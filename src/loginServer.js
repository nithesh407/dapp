const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3010;

app.use(cors());
app.use(bodyParser.json());

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'nithil',
  password: 'password',
  database: 'dapp',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Login endpoint
app.post('/login-form', (req, res) => {
  const { username, password, role } = req.body;
  let tableName;
  console.log(username,password,role);
  // Determine the MySQL table based on the selected role
  switch (role) {
    case 'Client':
      tableName = 'Client';
      break;
    case 'Judge':
      tableName = 'Judge';
      break;
    case 'Lawyer':
      tableName = 'Lawyer';
      break;
    default:
      return res.status(400).json({ message: 'Invalid role' });
  }



  

  // Query the corresponding MySQL table for the user
  const query = `SELECT name,password FROM ${tableName} WHERE name = ? AND password = ?`;

  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('MySQL query error:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      // User not found, send an error response
      return res.json({ message: 'User not found' });
    }

    // User found, send a success response with the user data
    const user = results[0];
    return res.status(200).json({ message: 'Login successful', user });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
