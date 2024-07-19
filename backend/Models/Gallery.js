// GalleryItem.js (Mongoose model for Gallery items)
import { Schema, model } from 'mongoose';

const galleryItemSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['image', 'video']
  },
  url: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: function() { return this.type === 'image'; }
  },
  title: {
    type: String,
    required: function() { return this.type === 'video'; }
  }
});

const GalleryItem = model('GalleryItem', galleryItemSchema);

export default GalleryItem;