import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function generateInitalData() {
  // create test user
  const password = await hash("password", 12);
  const user = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      name: "test user",
      password,
    },
  });
}

async function generatePropertyData() {
  // create test property for test user where user has the id of "ed9eb7ab-74ae-40f8-973f-774fa8f8a2fe"
  const property = await prisma.property.create({
    data: {
      name: "test property",
      userId: "ed9eb7ab-74ae-40f8-973f-774fa8f8a2fe",
      isRented: false,
      tenantId: "f1ec7dc1-0361-4aef-98b7-e23711065ab9",
    },
  });
  console.log({ property });
}

async function generateTenantData() {
  // create test tenant for test property where property has the id of "d8c6d9b3-8a0d-4c9e-8e2f-3f1d4d0c7c6a"
  const tenant = await prisma.tenant.create({
    data: {
      name: "test tenant",
    },
  });
  console.log({ tenant });
}

async function main() {
  await generatePropertyData();
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
