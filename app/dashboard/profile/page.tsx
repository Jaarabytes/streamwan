import { getUser } from "@/app/lib/data"

export default function ProfilePage () {
    return (
            <>
            <h1 className="text-green-900 font-bold text-3xl">Hello, insertEmailHERE</h1>
            <p className="my-5">We thank you for using our services and being a content customer</p>
            <hr />

            <form className="my-5"> 
                <p className="my-3 mb-3">Any complaints?</p>
                <textarea placeholder="Submit them here (be as short as possible)"
                className="border-none w-96 h-72 p-3 rounded-lg"></textarea>
            <br /><br />
            <button type='submit' className="bg-green-900 hover:bg-green-700 text-white my-3 px-5 rounded-lg p-3"><a href='mailto:xh3rking96@gmail.com'>Submit</a></button>
            </form>
            <p className='my-3'>Are you a software developer? That's even better.</p>
            <p className='my-3'>Fork the github repository using the below link, fix it yourself and submit a pull request</p>
            <p className='my-3'>You're submissions are highly welcomed</p>
            <a href='https://github.com/Jaarabytes/streamwan/issues' className='text-green-900 font-bold' target='_blank'>https://github.com/Jaarabytes/streamwan</a>
            <p className='my-3'>You can also raise issues or any complaints here: </p>
            <a href='https://github.com/Jaarabytes/streamwan/issues' className='text-green-900 font-bold' target='_blank'>https://github.com/Jaarabytes/streamwan/issues</a>
            <hr />
        </>
        )
}
