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

console.log(
  calculateExercises(
    [3, 0, 2, 4.5, 0, 3, 1],2
  )
)