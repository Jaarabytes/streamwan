// Yeah, just write seed data in here, try your best

// Then add google auth

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


async function main () {
    // create two users
    const john = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@gmail.com',

        }
    })

    const alice = await prisma.user.create({
        data: {
            name: "Alice Doe",
            email: "alice.doe@gmail.com"
        }
    })

    await prisma.payment.createMany({
        data: [
            {
                userId: john.id,
                amount: 1200,
                date: new Date('12-11-2024')
            },
             {
                userId: john.id,
                amount: 200,
                date: new Date('12-12-2024')
            },
            {
                userId: alice.id,
                amount: 1200,
                date: new Date('12-11-2024')
            },
            {
                userId: alice.id,
                amount: 1200,
                date: new Date('12-12-2024')
            }
        ]
    })
    console.log("Successfully seeded users");
}

main().catch((e) => {
    console.error("Error when seeding users", e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})
