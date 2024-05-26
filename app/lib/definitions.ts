// // This file contains type definitions for your data.
// // It describes the shape of the data, and what data type each property should accept.

export type User = {
    id : string;
    username?: string;
    email: string;
    password: string;
}

export type Customer = {
    id : string;
    username?: string;
    email: string;
    password: string;
}

export type Payments = {
    id: string;
    userId: number;
    amount: number;
    status: 'pending' | 'paid';
    paymentDate: Date;
}

export type Revenue = {
    month: string;
    revenue: number;
}
export type LatestPayment = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    amount: string;
  };

export type LatestPaymentRaw = Omit<LatestPayment, 'amount'> & {
amount: number;
};

export type PaymentsTable = {
    id: string;
    customer_id: string;
    name: string;
    email: string;
    image_url: string;
    date: string;
    amount: number;
    status: 'pending' | 'paid';
  };
  
  export type CustomersTableType = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: number;
    total_paid: number;
  };
  
  export type FormattedCustomersTable = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: string;
    total_paid: string;
  };
  
  export type CustomerField = {
    id: string;
    name: string;
  };
  
  export type PaymentForm = {
    id: string;
    customer_id: string;
    amount: number;
    status: 'pending' | 'paid';
  };
  