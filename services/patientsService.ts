import patients from '../data/patients.json';
import { PatientWithoutSSN } from '../types/types';

const getAll = (): PatientWithoutSSN[] => {
    return patients.map(({ id, name, dateOfBirth, occupation, gender }) => {
        return {
            id,
            name,
            dateOfBirth,
            occupation,
            gender,
        };
    });
};

export default { getAll };
