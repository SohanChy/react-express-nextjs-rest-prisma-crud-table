import express, { NextFunction, Request, Response } from 'express';
import { EmployeeController } from './controllers/EmployeeController';
import { ValidationError } from './middlewares/ApiErrors';

const router = express.Router();


router.get('/employees', EmployeeController.index);


router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ValidationError) {
        return res.status(422).json({ success: false, message: err.message });
    }
    else if (err instanceof Error) {
        return res.status(500).json({ success: false, message: err.message });
    } else {
        return res.status(500).json({ success: false, message: 'Something went wrong!' });
    }
}   
);


export default router;