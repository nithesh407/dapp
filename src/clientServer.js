const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package

dotenv.config();

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL host
  port: 3306, // Change this to your MySQL port
  user: 'nithil', // Change this to your MySQL user
  password: 'password', // Change this to your MySQL password
  database: 'dapp', // Change this to your MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  } else {
    console.log('Connected to MySQL');
  }
});

app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, mobileNumber, aadharNumber, password } = req.body;

    const sql = `INSERT INTO Client (name, email, mobileNumber, aadharNumber, password)
                 VALUES (?, ?, ?, ?, ?)`;

    const result = await new Promise((resolve, reject) => {
      db.query(sql, [name, email, mobileNumber, aadharNumber, password], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Data inserted into MySQL:', result);
    res.status(200).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('MySQL query error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
