import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const Event = model('Event', eventSchema);

export default Event;