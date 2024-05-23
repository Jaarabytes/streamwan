
export default function Marketing () {
  return (
    <>
        <div className='sm:my-48'>
            <div className='px-10 sm:px-48 sm:flex sm:justify-evenly'>
                <div className='sm:w-1/2'>
                    <h2 className='text-[40px] text-green-900 font-extrabold my-5'>Say Goodbye to lagging.</h2>
                    <p className='text-xl text-green-800'>Tired of slow internet? Upgrade to our lightning-fast Wi-Fi for seamless streaming and lag-free gaming.
                        Join thousands of satisfied customers and transform your online experience now!
                    </p>
                    <button
                    className="w-full sm:w-1/4 bg-green-900 text-xl my-5 rounded-lg text-white hover:bg-green-800 transition duration:500"
                    style={{
                        paddingBlock: "10px",
                        paddingInline: "30px"
                    }}>Learn more</button>
                </div>
                <div>
                    <img
                    className='sm:h-[400px]'
                    src="https://jomeista.github.io/streamwan/img/Homefibre.png"
                    alt="A Happy family enjoying lag-free internet"
                    ></img>
                </div>
            </div>


            <div className='px-10 sm:px-48 sm:flex sm:justify-evenly'>
                <div>
                    <img
                    className='w-[500px]'
                    src='../../public/real_download2.jpeg'
                    alt="Customer care staff response"
                    ></img>
                </div>
                <div className='sm:w-1/2'>
                    <h2 className='text-[40px] text-green-900 font-extrabold my-5'>Cooperative Customer Care</h2>
                    <p className='text-xl text-green-800'>Don't settle for less. StreamWan services provide excellent services before, during and after installation.
                    We take full responsibility for problems encountered along the way. 
                    </p>
                    <button className="w-full sm:w-1/4 bg-green-900 my-5 text-xl rounded-lg text-white hover:bg-green-800 transition duration:500"
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