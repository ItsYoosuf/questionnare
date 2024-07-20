import { connect } from 'mongoose';

connect('mongodb://localhost:27017/questionnare')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));