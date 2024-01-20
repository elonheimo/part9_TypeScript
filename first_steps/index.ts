import express from 'express';
import { calculateBmi } from './bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  let { weight, height} = req.query
  if (isNaN(Number(weight)) || isNaN(Number(height))) {
    return res.json({
    error: "malformatted parameters"
    })
  }
  return res.json({
    weight: weight,
    height: height,
    bmi: calculateBmi(Number(height), Number(weight))
  })
});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});