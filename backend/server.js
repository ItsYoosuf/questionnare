import express from 'express';
import cors from 'cors'; // Import cors
import './db.js';
// Adjust the import to match the new export format and ensure the path is correct
import { getNewsItems } from './Controllers/NewsSection.js'; // Adjust the path as necessary
import { getEvents } from './Controllers/Events.js';
import authController from './Controllers/authController.js';
import bodyParser from 'body-parser';
const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', // Adjust this to match your client's origin
    credentials: true, // To allow cookies and authentication headers
  };
app.use(cors(corsOptions));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;
app.get('/api/news', getNewsItems);
app.get('/api/events', getEvents);
app.post('/signup/:email', authController.signUp);
app.put('/signin/:email', authController.signIn);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));