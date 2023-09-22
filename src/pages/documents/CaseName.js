const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package

dotenv.config();

const app = express();
const port = process.env.PORT || 3031; // Change the port to your desired port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL host
  port: 3306, // Change this to your MySQL port
  user: 'root', // Change this to your MySQL user
  password: 'nithesh13631', // Change this to your MySQL password
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

// Define a route for handling the POST request to /CaseFile
app.post('/Casename', async (req, res) => {
  try {
    const { casenumber, casename, casetype, startdate } = req.body;

    const sql = `INSERT INTO Casename (casenumber, casename, casetype, startdate)
                 VALUES (?, ?, ?, ?)`;

    const result = await new Promise((resolve, reject) => {
      db.query(sql, [casenumber, casename, casetype, startdate], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Data inserted into MySQL:', result);
    res.status(200).json({ success: true, message: 'Data inserted successfully' });
  } catch (error) {
    console.error('MySQL query error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
