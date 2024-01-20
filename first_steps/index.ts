import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { Operation, calculator } from './calculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();
app.use(express.json());
app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { weight, height} = req.query;
  if (isNaN(Number(weight)) || isNaN(Number(height))) {
    return res.json({
    error: "malformatted parameters"
    });
  }
  return res.json({
    weight: weight,
    height: height,
    bmi: calculateBmi(Number(height), Number(weight))
  });
});

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  if ( !value1 || isNaN(Number(value1)) ) {
    return res.status(400).send({ error: '...'});
  }

  // more validations here...

  const result = calculator(
    Number(value1), Number(value2), op as Operation
  );

  return res.send({ result });
});

app.post('/exercises', (req, res) => {
  
  interface ExerciseArgs {
    target: number
    daily_exercises: number[]
  }
  const { daily_exercises, target } = <ExerciseArgs>req.body;
  
  if (!daily_exercises || !target) {
    return res.json({
    error: "parameters missing"
    });
  }

  if (isNaN(target) || !daily_exercises.every((day) => !isNaN(day))) {
    return res.json({
      error: "malformatted parameters"
    });
  }
  return res.json(
    calculateExercises(daily_exercises, target)
  );
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});