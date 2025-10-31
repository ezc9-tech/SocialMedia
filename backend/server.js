import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './connectDB.js';
import userRouter from './routes/users.js';
import postsRouter from './routes/posts.js';
import authRouter from './routes/auth.js';
import profileRouter from './routes/profile.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
