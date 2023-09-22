const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package

dotenv.config();

const app = express();
const port = process.env.PORT || 3032; // Change the port to your desired port

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

// Define a route for handling the GET request to retrieve all records from CaseFile
app.post('/Caseretrieve', async (req, res) => {
  try {
    const sql = `SELECT * FROM Casename`;

    const result = await new Promise((resolve, reject) => {
      db.query(sql, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    const formattedData = result.map((row) => ({
        caseNumber: row.casenumber,
        tags: JSON.parse(row.casetype),
        startDate: row.startdate,
        title: row.casename,
        imageUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      }));
    console.log('Data retrieved from MySQL:', formattedData,typeof(formattedData));
    res.status(200).json({ success: true, data: formattedData});
  } catch (error) {
    console.error('MySQL query error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
