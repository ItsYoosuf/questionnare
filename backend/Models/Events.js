// EventSchema.js
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  day: String,
  date: Date,
  name: String,
});

const Event = mongoose.model('Event', eventSchema);

export default Event;

// import { Schema, model } from 'mongoose';

// const eventSchema = new Schema({
//   day: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     required: true
//   },
//   name: {
//     type: String,
//     required: true
//   }
// });

// const Event = model('Event', eventSchema);

// export default Event;