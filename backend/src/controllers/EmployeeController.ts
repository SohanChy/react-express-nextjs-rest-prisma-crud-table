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
            return next(new ValidationError("pageNum & limit must be integer"));
        }

        if (pageNum < 1 || limit < 1) {
            return next(new ValidationError("pageNum & limit must be greater than 1"));
        }


        // All errors handled by middleware
        try{
            const employees = await EmployeeController.prismaClient.employee.findMany({
                skip: (pageNum - 1) * limit,
                take: limit,
            })    

            res.status(200).json({ success: true, data: employees });
        }
        catch (err: unknown){
            return next(err);
        }

    }

    private static validateEmployee(next: NextFunction, firstName: string, lastName: string, salary: number){
        if (!firstName || typeof firstName !== "string") {
            return next(new ValidationError("Invalid first name"));
        }

        if (!lastName || typeof lastName !== "string") {
            return next(new ValidationError("Invalid last name"));
        }

        if (!Number.isInteger(Number(salary))) {
            return next(new ValidationError("Invalid salary, must be a number"));
        }

        return true;
    }

    public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {

        let { firstName, lastName, salary } = req.body;

        // Some clients might send integer as string (eg. axios)
        const parsedSalary = parseInt(salary);
        const validated = EmployeeController.validateEmployee(next, firstName, lastName, parsedSalary);
        if(validated !== true){
            return validated;
        }
        

        // All errors handled by middleware
        try{
            const employee = await EmployeeController.prismaClient.employee.create({
                    data: {
                      ...req.body,
                      salary: parsedSalary
                    },
                  })

            res.status(201).json({ success: true, data: employee });
        }
        catch (err: unknown){
            next(err);
        }

    }

    public static async update(req: Request, res: Response, next: NextFunction): Promise<void> {

        const { firstName, lastName, salary } = req.body;

        // Some clients might send integer as string (eg. axios)
        const parsedSalary = parseInt(salary);
        const validated = EmployeeController.validateEmployee(next, firstName, lastName, parsedSalary);
        if(validated !== true){
            return validated;
        }

        const id = parseInt(req.params.id as string, 10);
        if (!Number.isInteger(Number(id))) {
            return next(new ValidationError("id must be an integer"));
        }

        // All errors handled by middleware
        try{
            const employee = await EmployeeController.prismaClient.employee.update({
                    where: { id: Number(id) },
                    data: {
                      ...req.body,
                      salary: parsedSalary
                    },
                  })

            res.status(200).json({ success: true, data: employee });
        }
        catch (err: unknown){
            next(err);
        }

    }

    public static async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = parseInt(req.params.id as string, 10);
        if (!Number.isInteger(Number(id))) {
            return next(new ValidationError("id must be an integer"));
        }

        // All errors handled by middleware
        try{
            await EmployeeController.prismaClient.employee.delete({
                    where: { id: Number(id) },
                  })

            res.status(200).json({ success: true, message: `Deleted id: ${id}` });
        }
        catch (err: unknown){
            next(err);
        }

    }

}