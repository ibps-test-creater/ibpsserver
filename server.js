const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ibps-tests';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✓ MongoDB Connected'))
  .catch(err => console.error('✗ MongoDB Error:', err));

// Routes
const testRoutes = require('./routes/tests');
const attemptRoutes = require('./routes/attempts');

app.use('/api/tests', testRoutes);
app.use('/api/attempts', attemptRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server Running', timestamp: new Date() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════╗
║    IBPS TEST PLATFORM SERVER v1.0     ║
║    Running on http://localhost:${PORT}   ║
║    API: http://localhost:${PORT}/api     ║
╚═══════════════════════════════════════╝
  `);
});
