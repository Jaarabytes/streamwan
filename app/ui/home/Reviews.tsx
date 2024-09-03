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
        <div className='sm:py-48 py-20 bg-gradient-to-b from-white to-white'>
            <hr className='text-green-900' />
            <div className='text-center text-green-900 py-5'>
                <p className='text-2xl'>For <span className='font-bold'>speed</span>, <span className='font-bold'>efficiency</span> and a <span className='font-bold'>happy environment</span></p>
                <br></br>
                <p className='text-lg px-5'>StreamWan is trusted all over Kenya and beyond.</p>
            </div>
            <hr className='text-green-900' />
            <div className='sm:flex sm:justify-center text-green-900 mt-10 sm:px-[20%]'
            >
                {customers.map((elem, index) => 
                <div 
                className='mx-5 p-5'
                key={index}
                >
                 <svg className="w-8 h-8 text-green-900 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
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
