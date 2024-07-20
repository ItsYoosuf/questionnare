import express from 'express';
import cors from 'cors'; // Import cors
import './db.js';
// Adjust the import to match the new export format and ensure the path is correct
import { getNewsItems } from './Controllers/NewsSection.js'; // Adjust the path as necessary
import { getEvents } from './Controllers/Events.js';
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
app.get('/api/news', getNewsItems);
app.get('/api/events', getEvents);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));