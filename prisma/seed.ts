
import { PrismaClient } from '@prisma/client'
import { links } from '../data/link'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      username: `admin@disbudpar`,
      password: 'admin123',
      role: 'ADMIN',
    },
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })