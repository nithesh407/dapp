const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package

dotenv.config();

const app = express();
const port = process.env.PORT || 3012;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'nithil',
  password: 'password',
  database: 'dapp',
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
    const { name, email, mobileNumber, password, barID, selectedState, selectedCourt, selectedDistrict } = req.body;

    const sql = `INSERT INTO Lawyer (name, email, mobileNumber, password, bar, state, courtType, district)
                 VALUES (?,  ?, ?, ?, ?, ?, ?, ?)`;

    const result = await new Promise((resolve, reject) => {
      db.query(sql, [name, email, mobileNumber, password, barID, selectedState, selectedCourt, selectedDistrict], (err, result) => {
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
