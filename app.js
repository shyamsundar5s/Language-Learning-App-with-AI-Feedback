const express = require('express');
const bodyParser = require('body-parser');
const speechRoutes = require('./routes/speech');
const grammarRoutes = require('./routes/grammar');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/speech', speechRoutes);
app.use('/api/grammar', grammarRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
