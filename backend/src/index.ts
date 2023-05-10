import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import v1Router from './v1Routes';
import { ValidationError } from './middlewares/ApiErrors';

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/', v1Router);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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

const server = app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)
