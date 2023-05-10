import { PrismaClient } from '@prisma/client';
import { log } from 'console';
import { NextFunction, Request, Response } from 'express';
import { ValidationError } from '../middlewares/ApiErrors';

export class EmployeeController {

    public static prismaClient = new PrismaClient()

    public static async index(req: Request, res: Response, next: NextFunction): Promise<void> {

        // 1 indexed
        let pageNum = 1;
        let limit = 10;
        

        // Validation - Should use package such as joi
        if(req.query.pageNum){
            pageNum = parseInt(req.query.pageNum as string, 10);
        }

        if(req.query.limit){
            limit = parseInt(req.query.limit as string, 10);
        }
        
        if (!Number.isInteger(Number(pageNum)) || !Number.isInteger(Number(limit))) {
            next(new ValidationError("pageNum & limit must be integer"));
        }

        if (pageNum < 1 || limit < 1) {
            next(new ValidationError("pageNum & limit must be greater than 1"));
        }


        // All errors handled by middleware
        try{
            const employees = await EmployeeController.prismaClient.employee.findMany({
                skip: (pageNum - 1) * limit,
                take: limit,
            })    

            res.status(200).json({ success: true, employees });
        }
        catch (err: unknown){
            next(err);
        }

    }

}