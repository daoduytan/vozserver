require('babel-polyfill');
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import storiesRouter from './routes/storiesRouter';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use('/stories', storiesRouter);

app.listen(PORT, () => console.log(`App run in port ${PORT}`));
