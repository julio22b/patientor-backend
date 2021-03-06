import express from 'express';
import patientsService from '../services/patientsService';
const router = express.Router();

router.get('/patients', (_req, res) => {
    res.send(patientsService.getAll());
});

export default router;
