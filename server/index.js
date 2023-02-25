import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import dalleRoute from './routes/dalleRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dall-e', dalleRoute);

app.get('/', async (req, res) => {
  res.send('3:00 AM in Tokyo Server');
});

const startServer = async () => {
  app.listen(8080, () => {
    console.log('Server has started.');
  })
}

startServer();

