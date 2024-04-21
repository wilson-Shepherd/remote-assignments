const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '560ALGXKnY$',
  database: 'assignment'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database');
    return;

  }
  console.log('Connected to MySQL database');
});

app.use(express.urlencoded({ extended: true }));

// html
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Member Sign-up and Sign-in</title>
      </head>
      <body>
        <h1>Welcome to the Member Sign-up and Sign-in Page</h1>
        <h2>Sign Up</h2>
        <form action="/signup" method="post">
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="password" placeholder="Password" required>
          <button type="submit">Sign Up</button>
        </form>
        <h2>Sign In</h2>
        <form action="/signin" method="post">
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="password" placeholder="Password" required>
          <button type="submit">Sign In</button>
        </form>
      </body>
    </html>
  `);
});

// Sign-up route
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  connection.query('INSERT INTO user (email, password) VALUES (?, ?)', [email, password], (err, results) => {
    if (err) {
      console.error('Error signing up: ' + err);
      res.send('Sign-up failed.');
      return;
    }
    res.redirect('/member');
  });
});

// Sign-in route
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      console.error('Error signing in: ' + err);
      res.send('Sign-in failed.');
      return;
    }
    if (results.length > 0) {
      res.redirect('/member');
    } else {
      res.send('Invalid email or password.');
    }
  });
});


// Redirect to member
app.get('/member', (req, res) => {
  res.send('Welcome to the member area!');
});

// Handle errors
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
