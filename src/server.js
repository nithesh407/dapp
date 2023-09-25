const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3010;

app.use(cors());
app.use(bodyParser.json());
// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nithesh13631',
  database: 'dapp',
});

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
      return res.status(500).json({success:false, message: 'Server error' });
    }

    if (results.length === 0) {
      // User not found, send an error response
      return res.json({success:false, message: 'User not found' });
    }

    // User found, send a success response with the user data
    const user = results[0];
    return res.status(200).json({success:true, message: 'Login successful', user });
  });
});

app.post('/lawyer-submit', async (req, res) => {
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
    res.status(200).json({success:true, message: 'Data inserted successfully' });
  } catch (error) {
    console.error('MySQL query error:', error);
    res.status(500).json({success:false, error: 'Internal server error' });
  }
});

app.post('/judge-submit', async (req, res) => {
  try {
    const { name, email, mobileNumber, password, uid, selectedState, selectedCourt, selectedDistrict } = req.body;

    const sql = `INSERT INTO Judge (name, email, mobileNumber, password, uid, state, courtType, district)
                 VALUES (?,  ?, ?, ?, ?, ?, ?, ?)`;

    const result = await new Promise((resolve, reject) => {
      db.query(sql, [name, email, mobileNumber, password, uid, selectedState, selectedCourt, selectedDistrict], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Data inserted into MySQL:', result);
    res.status(200).json({success:true, message: 'Data inserted successfully' });
  } catch (error) {
    console.error('MySQL query error:', error);
    res.status(500).json({success:false, error: 'Internal server error' });
  }
});

app.post('/client-submit', async (req, res) => {
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
    res.status(200).json({success:true, message: 'Data inserted successfully' });
  } catch (error) {
    console.error('MySQL query error:', error);
    res.status(500).json({success:false, error: 'Internal server error' });
  }
});

app.post('/CaseFile', async (req, res) => {
  try {
    const { caseNumber, caseName, filename, cid } = req.body;

    const sql = `INSERT INTO Casefile (caseNumber, caseName, filename, cid)
                 VALUES (?, ?, ?, ?)`;

    const result = await new Promise((resolve, reject) => {
      db.query(sql, [caseNumber, caseName, filename, cid], (err, result) => {
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

app.post('/Casedelete', async (req, res) => {
  try {
    const { casenumber } = req.body;

    const sql = `DELETE FROM Casename WHERE casenumber=?;`;
    const sql1 = `DELETE FROM Casefile WHERE casenumber=?;`;

    const result = await new Promise((resolve, reject) => {
      db.query(sql, [casenumber], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
      db.query(sql1, [casenumber], (err, result) => {
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

app.post('/fetchJudge', async (req, res) => {
  try {
    const sql = `SELECT name,mobileNumber FROM Judge`;

    const result = await new Promise((resolve, reject) => {
      db.query(sql, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    console.log('Data retrieved from MySQL:',result);
    res.status(200).json({ success: true, data: result});
  } catch (error) {
    console.error('MySQL query error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.post('/fetchLawyer', async (req, res) => {
  try {
    const sql = `SELECT name,mobileNumber FROM Lawyer`;

    const result = await new Promise((resolve, reject) => {
      db.query(sql, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    console.log('Data retrieved from MySQL:',result);
    res.status(200).json({ success: true, data: result});
  } catch (error) {
    console.error('MySQL query error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
