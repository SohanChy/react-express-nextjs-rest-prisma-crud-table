import express from 'express';
import { EmployeeController } from './controllers/EmployeeController';


const router = express.Router();


router.get('/employees', EmployeeController.index);
router.post('/employees', EmployeeController.create);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.delete);

export default router;