import { fetchPayment, getSession } from "@/lib/actions"

interface PaymentInterface {
  amount: number;
  date: Date;
}

export default async function PaymentsPage() {
  const id = await getSession();
  const payments = await fetchPayment(id) as any[];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Payment History</h2>
      { !payments || payments.length == 0 ? (
            <div className="divide-y divide-gray-200">
            <p className="text-red-500 font-extrabold">Sorry, it seems you have zero payments</p>
            </div>

      ): (
            <div className="divide-y divide-gray-200">
              {payments.map((payment: PaymentInterface, index: number) => (
                <div key={index} className="py-4 flex justify-between">
                  <span className="text-gray-700 font-extrabold">{payment.amount} KES</span>
                  <span className="text-gray-500">{payment.date.toLocaleDateString()}</span>
                </div>
              ))}
              </div>
      )}    
      </div>
  );
}
