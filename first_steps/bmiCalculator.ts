const calculateBmi = (height_cm: number, weight_kg: number): string => {
  let bmi = weight_kg / ((height_cm/100) ^ 2)
  if (bmi < 16) return "Underweight (Severe thinness)"
  if (bmi < 17) return "Underweight (Moderate thinness)"
  if (bmi < 18.5) return "Underweight (Mild thinness)"
  if (bmi < 25) return "Normal range (Healthy weight)"
  if (bmi < 30.0) return "Overweight (Pre-obese)"
  if (bmi < 35.0) return "Obese (Class I)"
  if (bmi < 40.0) return "Obese (Class II)"
  return "Obese (Class III)"
}

// interface BmiValues {
//   height_cm: number
//   weight_kg: number
// }

// const parseArguments = (args: string[]): BmiValues => {
//   if (args.length < 4) throw new Error('Not enough arguments');
//   if (args.length > 4) throw new Error('Too many arguments');
  
//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       height_cm: Number(args[2]),
//       weight_kg: Number(args[3])
//     }
//   } else {
//     throw new Error('Provided values were not numbers!');
//   }
// }

// try {
//   const { height_cm, weight_kg} = parseArguments(process.argv)
//   console.log(calculateBmi(height_cm, weight_kg))
// }
// catch (error: unknown){
//   if (error instanceof Error) {
//     console.log(`error + ${error.message}`);
//   }
//   else {
//     console.log('unknown error');
//   }
// }

export {calculateBmi};