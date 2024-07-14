'use client'
import { PaystackConsumer } from 'react-paystack';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Donate () {
    const [ amount, setAmount ] = useState(0);
    const publicKey = process.env.PAYSTACK_LIVE_PUBLIC_KEY as string;
    const config = { reference: (new Date()).getTime().toString(), email: 'xh3rking96@gmail.com', publicKey: publicKey, amount: amount * 100 }
    const onSuccess = () => toast.success("Payment sucessful")
    const onClose = () => toast.error("uWu, please don't give up")
    const componentProps = { ...config, text: 'Paystack configuration', onSuccess, onClose };
    return (
            <>
                <div className='text-center my-5' style={{minHeight: '100vh'}}>  
                    <h1 className='text-2xl font-bold my-5'>Thank you for donating anon!</h1>
                    <label>Amount in KES</label>
                    <br /><br />
                    <input className='text-center rounded-sm text-black py-3' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                    <br /><br />
                    <PaystackConsumer {...componentProps}>{({ initializePayment }) => 
                    <button className='my-5 py-2 text-white rounded-lg px-3 bg-green-900 hover:bg-green-700'
                     onClick={() => initializePayment(onSuccess, onClose)}>Money upvote
                    </button>
                    }
                    </PaystackConsumer>
                </div>
           </>
           )
}
