const { db } = require('@vercel/postgres');
const { users,
  customers,
  payments,
  revenue
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');
// const { create } = require('domain');
// const { custom } = require('zod');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedPayments ( client ) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS payments(
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );`

    console.log("Successfully created seedPayments table");

    const insertedPayments = await Promise.all(
      payments.map( (payment) => client.sql`
      INSERT INTO payments (customer_id, amount, status, date)
      VALUES (${payment.customer_id}, ${payment.amount}, ${payment.status}, ${payment.date})
      ON CONFLICT (id) DO NOTHING
      `
    )
    )

    console.log(`Seeded ${insertedPayments.length} into payments table`)
    return {createTable, payments: insertedPayments};
  }
  catch (err) {
    console.error("Error occured when seeding payments", err)
    throw err;
  }
}

async function seedCustomers ( client ) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS customers(
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    )
    `
    console.log("Succesfully created customers table");

    const insertedCustomers = await Promise.all(
      customers.map((customer) => client.sql`
      INSERT INTO customers (id, name, email, image_url)
      VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
      ON CONFLICT (id) DO NOTHING
      `)
    )

    console.log(`Seeded ${insertedCustomers.length} customers`)

    return {createTable, customers: insertedCustomers}
  }
  catch (err) {
    console.error("Error occured when seeding revenue", err)
    throw err;
  }
}

async function seedRevenue ( client ) {
  try {
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    )
    `
    console.log(`Created "revenue" table`);

    const insertedRevenue = await Promise.all (
      revenue.map((rev) => client.sql`
      INSERT INTO revenue (month, revenue)
      VALUES (${rev.month}, ${rev.revenue})
      ON CONFLICT (month) DO NOTHING
      `)
    )

    console.log(`Seeded ${insertedRevenue.length} into revenue`)
    return {createTable, revenue: insertedRevenue}
  }
  catch (err) {
    console.error("Error occured when seeding customers", err)
    throw err;
  }
}

async function main() {
  const client = await db.connect();


  await seedUsers(client)
  await seedCustomers(client)
  await seedPayments(client)
  await seedRevenue(client)


  await client.end();
}
main().catch(( err ) => {
  console.error("An error occured when seeding the database", err)
})