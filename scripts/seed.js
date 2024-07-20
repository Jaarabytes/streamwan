
const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})
const argon2 = require('argon2')

async function seedUsers ( client ) {
    try {
        const createTable = `CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        )`
        await client.query(createTable);
        console.log(`Successfully created the Users table`)
        const query = `INSERT INTO users (email, password) VALUES ($1, $2) ON CONFLICT (email) DO UPDATE SET password = EXCLUDED.password RETURNING id`
        await client.query(query, ['user@nextmail.com', await argon2.hash('123456')])
        await client.query(query, ['xavierandole@gmail.com', await argon2.hash('helloworld')])
        const { rows } = await client.query(`SELECT * FROM users`)
        console.log("All users include")
        for ( const user of rows ) {
            console.log(`${user.email}'s id is ${user.id} and his/her password is ${user.password}`)
        }
        console.log(`Successfully seeded the Users table`)
    }
    catch ( err ) {
        console.log(`Error when seeding Users: ${err}`)
    }
}

async function seedPayments ( client ) {
    try { 
        const createTable = `CREATE TABLE IF NOT EXISTS payments (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id) NOT NULL,
            amount DECIMAL(10, 2) NOT NULL,
            date DATE NOT NULL )`
        await client.query(createTable)
        console.log(`Successfully created the Payments table`)

        const query = `
        INSERT INTO payments (user_id, amount, date)
        VALUES ($1, $2, $3);
    `;

        await client.query(query, ['987649370104168449', 10000.0, '2024-07-14'])
        await client.query(query, ['987649370104168449', 3500.0, '2012-03-19'])
        await client.query(query, ['987649371996225537', 100.0, '2014-03-14'])
        await client.query(query, ['987649371996225537', 10000.0, '2020-12-12'])       

        console.log(`Successfully seeded the Payments table`)        
    }
    catch ( err ) {
        console.log(`Error when seeding payments: ${err}`)
    } 
}

async function main() {
    const client = await pool.connect();

    await seedUsers(client);
    await seedPayments(client);

    await client.end();
}

main().catch((err) => {
    console.log(`An error occured in the main function : ${err}`)
})
