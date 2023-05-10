import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import v1Router from './v1Routes';

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/', v1Router);

const server = app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)
