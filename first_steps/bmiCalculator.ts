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
console.log(calculateBmi(180, 74))
