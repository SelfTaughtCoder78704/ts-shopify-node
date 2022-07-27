// src/index.ts
import express from 'express';

const app = express();
app.use(express.json());

app.post('/webhook', async (req, res) => {
  console.log(req.body)
  return res.send('Data received');
});

app.post('/webhook/orderpayment', async (req, res) => {
  console.log(req.body)
  return res.send('Data received');
});

app.listen(3000, () => {
  console.log('your app is now listening on port 3000');
});