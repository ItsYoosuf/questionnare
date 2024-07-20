import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  quizzes: [{ type: Schema.Types.ObjectId, ref: 'Quiz' }]
});

export default model('Course', courseSchema);
