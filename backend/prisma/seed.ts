import { PrismaClient, Prisma, Employee } from '@prisma/client'
import fs from 'fs';

const prisma = new PrismaClient()

const data = fs.readFileSync('./prisma/data.json', 'utf-8');
const jsonData = JSON.parse(data);

const empData: Prisma.EmployeeCreateInput[] = jsonData.employees;

async function main() {
  console.log(`Start seeding ...`)
  for (const e of empData) {
    const employee = await prisma.employee.create({
      data: e,
    })
    console.log(`Created employee with id: ${employee.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
