import express from 'express';
import { EmployeeController } from 'controllers/EmployeeController';

const router = express.Router();

router.get('/employees', EmployeeController.index);

export default router;