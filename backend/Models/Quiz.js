import { Schema, model } from 'mongoose';

const questionSchema = new Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true }
});

const quizSchema = new Schema({
  title: { type: String, required: true },
  questions: [questionSchema],
  passingScore: { type: Number, required: true }
});

export default model('Quiz', quizSchema);
