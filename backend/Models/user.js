import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'learner'], default: 'learner' },
  certificates: [{ type: Schema.Types.ObjectId, ref: 'Certificate' }]
});

export default model('User', userSchema);
