const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

const encoder = new TextEncoder();

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
        // Look at what a terrible JS framework can make a man do
        const tihihi = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode('123456')))).map(byte => byte.toString(16).padStart(2, '0')).join("")
        console.log(`tihihi is ${tihihi}`)
        await client.query(query, ['user@nextmail.com', Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode('123456')))).map(byte => byte.toString(16).padStart(2,'0')).join('')])
        await client.query(query, ['xavierandole@gmail.com', Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",encoder.encode('helloworld')))).map(byte => byte.toString(16).padStart(2,'0')).join('')])
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
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
            amount DECIMAL(10, 2) NOT NULL,
            date DATE NOT NULL);`
        await client.query(createTable)
        console.log(`Successfully created the Payments table`)

        const query = `
        INSERT INTO payments (user_id, amount, date)
        VALUES ($1, $2, $3);
    `;

        await client.query(query, ['998626606511095809', 10000.0, '2024-07-14'])
        await client.query(query, ['998626607192834049', 3500.0, '2012-03-19'])
        await client.query(query, ['998626607192834049', 100.0, '2014-03-14'])
        await client.query(query, ['998626606511095809', 10000.0, '2020-12-12'])       

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
