const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  placeholder: String,
  data: String,
  height: Number
}, { _id: false });

const questionSchema = new mongoose.Schema({
  id: Number,
  instructions: String,
  instructionImages: [imageSchema],
  questionEn: String,
  questionHi: String,
  options: [String],
  correctAnswer: Number,
  solution: String,
  solutionImages: [imageSchema]
}, { _id: false });

const testSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  subject: String,
  duration: Number,
  totalQuestions: Number,
  questions: [questionSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Test', testSchema);
