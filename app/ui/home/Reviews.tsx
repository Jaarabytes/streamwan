export default function Reviews () {
    const customers = [
        {
            name : 'Sarah, university student',
            review: `"I love how reliable and fast my Wi-Fi connection is now! Streaming movies and video calls are seamless. Highly recommend this service!"`
        },
        {
            name : 'John, father of 2',
            review: `"Our family's internet experience has improved significantly with this service. No more lag during online classes and gaming. Great value for the whole family!"`
        },
        {
            name : 'Herbert, Frontend developer at JaiTech Solutions',
            review: `"Switching to this Wi-Fi service has boosted our office productivity. Fast, stable connections for our team's remote work needs. A game-changer for our business!"`
        }
    ]

    return (
        <>
        <div className='sm:my-48 my-20'>
            <hr className='text-green-900' />
            <div className='text-center text-green-900 my-5'>
                <p className='text-2xl'>For <span className='font-bold'>speed</span>, <span className='font-bold'>efficiency</span> and a <span className='font-bold'>happy environment</span></p>
                <br></br>
                <p className='text-lg px-5'>StreamWan is trusted all over Kenya and beyond.</p>
            </div>
            <hr className='text-green-900' />
            <div className='sm:flex sm:justify-center text-green-900 mt-10 sm:px-[20%]'
            style={{

            }}
            >
                {customers.map((elem, index) => 
                <div 
                className='mx-5 p-5'
                key={index}
                >
                    <p className='sm:text-lg text-xl text-green-950'>{elem.review}</p>
                    <br></br>
                    <h4 className=''>{elem.name}</h4>
                </div>
                )}
            </div>
        </div>
        </>
    )
}
