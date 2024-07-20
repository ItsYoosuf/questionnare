// models/NewsItem.js
import { Schema, model } from 'mongoose';

const newsItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true });

const NewsItem = model('NewsItem', newsItemSchema);

export default NewsItem;