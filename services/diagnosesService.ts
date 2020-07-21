import { Diagnose } from '../types/types';
import diagnoses from '../data/diagnoses.json';

const getAll = (): Diagnose[] => {
    return diagnoses;
};

export default { getAll };
