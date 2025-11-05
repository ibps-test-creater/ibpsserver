const express = require('express');
const router = express.Router();
const Attempt = require('../models/Attempt');

router.get('/', async (req, res) => {
  try {
    const attempts = await Attempt.find();
    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const attempt = await Attempt.findOne({ attemptId: req.params.id });
    if (!attempt) return res.status(404).json({ message: 'Attempt not found' });
    res.json(attempt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/test/:testId', async (req, res) => {
  try {
    const attempts = await Attempt.find({ testId: req.params.testId });
    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const attempt = new Attempt(req.body);
  try {
    const savedAttempt = await attempt.save();
    res.status(201).json(savedAttempt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
