'use client'
//yes, this is a donate money upvote, thank you all for the donations!!
import { usePaystackPayment } from 'react-paystack'
import { useState } from 'react';
export default function Donate () {
    const [ amount, setAmount ] = useState(0);
    const publicKey = 'pk_live_9999378c83331abc0c642f96d2457a5f88969934';
    const config = { reference: (new Date()).getTime().toString(), email: 'xh3rking96@gmail.com', amount: amount, publicKey }
    const onSuccess = () => alert("Thank you for the donation")
    const onClose = () => alert("uWu, please don't leave")
    const initializePayment = usePaystackPayment(config);
    return (
        <>
                <div style={{minHeight: "100vh"}} className='text-center'>
                <p className='my-3 text-2xl font-bold'>Thank you for your donation anon!</p>
                <label>Amount: </label>
                <br /><br />
                <input className='rounded-sm p-2 text-center' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                <br /><br />
                <button className="text-white rounded-lg px-4 py-2 bg-green-900 hover:bg-green-700 px-3 my-3"
                onClick={() => initializePayment(onSuccess, onClose)}
                >Donate</button>
                <p className='my-3'>Thank you so much <a href='https://paystack.com' className='font-bold text-green-900'>Paystack</a></p>
                </div>
        </>
       )
}
