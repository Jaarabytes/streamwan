// 'use server';
// import z from 'zod';
// import { sql } from '@vercel/postgres';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';

// export type State = {
//     errors? : {
//         customerId? : string[],
//         amount? : string[],
//         state? : string[],
//     };
//     message? : string | null;
// }

// export async function authenticate (prevState : string | undefined , formData: FormData) {
//     try {
//         await signIn('credentials', formData);
//     }
//     catch (error) {
//         if (error instanceof AuthError) {
//             switch (error.type) {
//                 case "CredentialsSignin":
//                     return "Invalid Credentials"
//                 default:
//                     return "Something went wrong"
//             }
//         }
//         throw error;
//     }
// }

// const formSchema = z.object({
//     id: z.string(),
//     customerId: z.string({
//         invalid_type_error: "Please select a customer"
//     }),
//     amount: z.coerce.number().gt(0, {
//         message: "Please enter an amount greater than $0"
//     }),
//     status: z.enum(['pending', 'paid'], {
//         invalid_type_error: "Please select an invoice status"
//     }),
//     date: z.string()
// })

// const CreateInvoice = formSchema.omit({date: true, id: true});

// export async function createInvoice(prevState: State , formData: FormData)  {
//     const validatedFields = CreateInvoice.safeParse({
//         customerId: formData.get('customerId'),
//         amount: formData.get('amount'),
//         status: formData.get('status'),
//     });

//     if (!validatedFields.success) {
//         return {
//             errors: validatedFields.error.flatten().fieldErrors,
//             message: 'Missing fields. Failed to create invoice'
//         }
//     }

//     const {customerId, amount, status} = validatedFields.data;
//     const amountInCents = amount * 100;
//     const date = new Date().toISOString().split('T')[0];
//     try {
//         await sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
//         `;
//     } catch (error) {
//         return {
//             message: "Database error: Failed to create invoice"
//         }
//     }

//     revalidatePath('/dashboard/invoices');
//     redirect('/dashboard/invoices');
// }

// const UpdateInvoice = formSchema.omit({date: true, id: true});

// export async function updateInvoice(id: string, prevState: State, formData: FormData)  {
//     const validatedFields = UpdateInvoice.safeParse({
//         customerId: formData.get('customerId'),
//         amount: formData.get('amount'),
//         status: formData.get('status'),
//     });

//     if(!validatedFields.success) {
//         return {
//             errors: validatedFields.error.flatten().fieldErrors,
//             message: "Missing fields. Failed to update invoice"
//         }
//     }

//     const {customerId, amount, status} = validatedFields.data;
//     const amountInCents = amount * 100;

//     try {
//         await sql`
//         UPDATE invoices
//         SET customer_id = ${customerId}, amount = ${amountInCents}, status= ${status}
//         WHERE id = ${id}
//         `;
//     } catch (error) {
//         return {
//             Message: "Database error: Failed to update Invoices"
//         }
//     }

//     revalidatePath('/dashboard/invoices');
//     redirect('/dashboard/invoices');
// }

// export async function deleteInvoice (id: string) {
//     // throw new Error ("Failed to delete new Invoice")
//     try {
//         await sql`DELETE FROM INVOICES WHERE id = ${id}`
//     }
//     catch (error) {
//         return {
//             Message: "Database Error: Failed to delete invoice"
//         }
//     }
//     revalidatePath('dashboard/invoices');
// }