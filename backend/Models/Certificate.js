import { Schema, model } from 'mongoose';

const certificateSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  dateIssued: { type: Date, default: Date.now },
  score: { type: Number, required: true }
});

export default model('Certificate', certificateSchema);
