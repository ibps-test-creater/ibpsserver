const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  attemptId: { type: String, unique: true },
  testId: String,
  testName: String,
  answers: mongoose.Schema.Types.Mixed,
  markedForReview: mongoose.Schema.Types.Mixed,
  questionTimes: mongoose.Schema.Types.Mixed,
  score: Number,
  percentage: Number,
  correct: Number,
  wrong: Number,
  skipped: Number,
  totalTime: String,
  attemptDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attempt', attemptSchema);
