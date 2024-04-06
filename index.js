const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the Calculator Service!');
});

// Addition endpoint
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({error: 'Please provide two valid numbers for addition.'});
  }

  const result = num1 + num2;
  res.json({ result });
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({error: 'Please provide two valid numbers for subtraction.'});
  }

  const result = num1 - num2;
  res.json({ result });
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({error: 'Please provide two valid numbers for multiplication.'});
  }

  const result = num1 * num2;
  res.json({ result });
});

// Division endpoint
app.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({error: 'Please provide two valid numbers for division.'});
  }

  if (num2 === 0) {
    return res.status(400).json({error: 'Cannot divide by zero.'});
  }

  const result = num1 / num2;
  res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator service running at http://localhost:${port}`);
});
