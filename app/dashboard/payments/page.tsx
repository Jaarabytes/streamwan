import { fetchPayment, getSession } from "@/lib/actions"
export default async function PaymentsPage() {
  const id = await getSession();
  const payments = await fetchPayment(id); // No need for stringify

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Payment History</h2>
      <div className="divide-y divide-gray-200">
        {payments.map((payment, index) => (
          <div key={index} className="py-4 flex justify-between">
            <span className="text-gray-700 font-extrabold">{payment.amount} KES</span>
            <span className="text-gray-500">{payment.date.toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
