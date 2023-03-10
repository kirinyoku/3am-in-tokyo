import express from 'express';
import * as dotenv from'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();  

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.send('DALL-E API');
}) 

router.route('/').post(async (req, res) => {
  try {

    const { prompt, size } = req.body;
    const aiResponse = await openai.createImage({
      n: 1,
      prompt,
      size: size,
    })

    const imageURL = aiResponse.data.data[0].url;
    res.status(200).json({ data: imageURL });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: 'error' });
  }
})

export default router;