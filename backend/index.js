const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from frontend (now public)
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve index.html by default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
