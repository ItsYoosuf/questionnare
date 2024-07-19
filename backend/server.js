import express, { json } from 'express';
import { connect } from 'mongoose';
import newsRoutes from './routes/newsRoutes';

const app = express();

// Connect to MongoDB
connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(json());
app.use('/api', newsRoutes);

router.get('/news', newsController.getNewsItems);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));