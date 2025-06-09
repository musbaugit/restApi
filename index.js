const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');

const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON
app.use('/items', itemsRouter);

// Home route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Catch invalid routes or Handle invalid routes (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Handle unexpected server errors (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
