import React from 'react';

export default function Marketing () {
  return (
    <>
        <div className='my-10'>
            <div className='px-48 flex'>
                <div>
                    <h2 className='text-[40px] text-green-900 font-extrabold my-5'>Say Goodbye to lagging.</h2>
                    <p className='text-xl text-green-800'>Tired of slow internet? Upgrade to our lightning-fast Wi-Fi for seamless streaming and lag-free gaming.
                        Join thousands of satisfied customers and transform your online experience now!
                    </p>
                    <button
                    className="bg-green-900 text-xl my-5 rounded-lg text-white hover:bg-green-800 transition duration:500"
                    style={{
                        paddingBlock: "10px",
                        paddingInline: "30px"
                    }}>Learn more</button>
                </div>
                <div>
                    <img
                    className='h-[400px] w-[900px]'
                    src="https://jomeista.github.io/streamwan/img/Homefibre.png"
                    alt="A Happy family enjoying lag-free internet"
                    ></img>
                </div>
            </div>


            <div className='px-48 flex'>
                <div>
                    <img
                    src='../../public/download.jpeg'
                    alt="Customer care staff response"
                    ></img>
                </div>
                <div>
                    <h2 className='text-[40px] text-green-900 font-extrabold'>Cooperative Customer Care</h2>
                    <p className='text-xl text-green-800'>Don't settle for less. StreamWan services provide excellent services before, during and after installation.<br></br>
                    We take full responsibility for problems encountered along the way. 
                    </p>
                    <button className="bg-green-900 mx-5 text-xl rounded-lg text-white hover:bg-green-800 transition duration:500"
                        style={{
                            paddingBlock: "10px",
                            paddingInline: "30px"
                        }}>Learn more</button>
                </div>
            </div>
        </div>
    </>
  );
};