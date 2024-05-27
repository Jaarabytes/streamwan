import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { User, Customer, Payments, Revenue, LatestPayment, PaymentsTable, LatestPaymentRaw, CustomersTableType, CustomerField, PaymentForm } from './definitions'
import { formatCurrency } from "./utils";

export async function fetchRevenue () {
    noStore()
    try {
        console.log("Fetching revenue data")
        await new Promise((resolve) => setTimeout(resolve, 3000))
        const data = await sql<Revenue>`SELECT * FROM revenue`
        console.log('Data fetch completed after 3 rows')
        return data.rows
    }
    catch (err) {
        console.error("Database error", err)
        throw new Error("Failed to fetch revenue data")
    }
}

export async function fetchLatestPayments () {
    noStore();

    try {
        const data = await sql<LatestPaymentRaw>`
        SELECT invoices.amount, customers.name, customers.image_url, customer.email, payments.id
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        ORDER BY invoices.date DESC
        LIMIT 5
        `
        const latestPayments = data.rows.map((payment => ({
            ...payment,
            amount: formatCurrency(payment.amount)
        })))

        return latestPayments;
    }
    catch( err ) {
        console.error("Error when fetching latest invoices", err)
        throw new Error("Error when fetching latest invoices")
    }

}

export async function fetchCardData () {
    
}

export async function fetchCustomers () {
    
}

export default function fetchFilteredCustomers (query: string) {

}


export async function getUser (email: string) {
    noStore();

    try {
        const user = await sql`SELECT * FROM users WHERE email=${email}`
        return user.rows[0] as User;
    }
    catch ( err ) {
        console.error("An error occured when fetching user", err)
        throw new Error ("Failed to fetch user");
    }
}