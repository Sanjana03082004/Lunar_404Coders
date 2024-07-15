javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000; 

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mymernproject', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Middleware (optional, but often used)
app.use(express.json());

// Define your routes here (example)
app.get('/', (req, res) => {
  res.send('Hello from the MERN backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});