import patients from "../../data/patients";
import { v1 as uuid } from 'uuid';

import { NewPatient, Patient, PatientNoSSN } from "../types";

const getPatientsNoSSN = (): PatientNoSSN[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, name, dateOfBirth, gender, occupation
  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const id = uuid();
  const newPatient = {
    id: id,
    ...patient
  };
  patients.push(newPatient);

  return newPatient;
};

export default { getPatientsNoSSN, addPatient };