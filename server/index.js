import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import dalleRoute from './routes/dalleRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dalle', dalleRoute);

app.get('/', async (req, res) => {
  res.send('SERVER');
});

const startServer = async () => {
  app.listen(8080, () => {
    console.log('Server has started on port http://localhost:8080');
  })
}

startServer();

