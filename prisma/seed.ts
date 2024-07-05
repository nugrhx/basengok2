import { PrismaClient } from '@prisma/client';

// const adminData = [
// ];

// const amenitasData = [
// ];

// const pendukungData = [
// ];

// const dtwData = [
// ];

// const userData = [
// ];

const prisma = new PrismaClient();

async function seed() {
  // try {
  //   await prisma.admin.createMany({ data: adminData });
  //   await prisma.amenitas.createMany({ data: amenitasData });
  //   await prisma.pendukung.createMany({ data: pendukungData });
  //   await prisma.dtw.createMany({ data: dtwData });
  //   await prisma.user.createMany({ data: userData });
  //   // ... insert data for other tables
  // } catch (error) {
  //   console.error('Error seeding data:', error);
  // } finally {
  //   await prisma.$disconnect();
  // }
}

seed();
