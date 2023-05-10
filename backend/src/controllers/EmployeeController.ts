import { PrismaClient } from '@prisma/client';
import { log } from 'console';
import { Request, Response } from 'express';

export class EmployeeController {

    public static prismaClient = new PrismaClient()

    public static async index(req: Request, res: Response): Promise<void> {
        try {
            const employees = await EmployeeController.prismaClient.employee.findMany({})
            
        res.status(200).json({ success: true, employees });
        } 
        catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ success: false, message: error.message });
            } else {
                console.error(error);
                res.status(500).json({ success: false, message: "Unknown error ocurred" });
            }
    }

}