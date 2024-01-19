interface ExerciseResult {
  periodLength: number; 
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (days: number[], target: number): ExerciseResult => {
  let average = days.reduce((a, b) => a + b, 0) / days.length
  let rating = average < target - 0.5 ? 1
    : average > target + 0.5 ? 3
    : 2
  let ratingDescription = rating == 1 ? 'bad'
    : rating == 2 ? 'good'
    : 'great'
  
  let trainingDays= days.reduce(
    (sum, day_hrs)=> day_hrs > 0 ? sum + 1 : sum, 0)
  return {
    periodLength: days.length,
    trainingDays: trainingDays,
    success: average >= target,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average,
  }
} 

// console.log(
//   calculateExercises(
//     [3, 0, 2, 4.5, 0, 3, 1],2
//   )
// )

interface ExerciseArgs {
  target: number
  days: number[]
}

const parseArguments = (args: string[]): ExerciseArgs => {
  if (args.length < 4) throw new Error('Not enough arguments');
  args.slice(2).forEach((arg) => {
    if (isNaN(Number(arg))) throw new Error('Provided values were not numbers!');
  })
  return {
    target: Number(args[2]),
    days:   args.slice(3).map((arg) => Number(arg))
  }
}

try {
  const { target, days} = parseArguments(process.argv)
  console.log(calculateExercises(days, target))
}
catch (error: unknown){
  if (error instanceof Error) {
    console.log(`error + ${error.message}`);
  }
  else {
    console.log('unknown error');
  }
}