import { fetchMail, getSession } from "@/lib/actions"

export default async function ProfilePage () {
  const session = await getSession();
  const userMail = await fetchMail(session)
  return (
            <>
            <h1 className="text-green-900 font-bold text-3xl">Hello, <span>{userMail}</span></h1>
            <p className="my-5 text-black">We thank you for using our services and being a content customer</p>
            <hr />

            <form className="my-5"> 
                <p className="my-3 mb-3 text-black">Any complaints?</p>
                <textarea placeholder="Submit them here (be as short as possible)"
                className="border-none h-48 w-72 text-black sm:w-96 sm:h-72 p-3 rounded-lg"></textarea>
            <br /><br />
            <button type='submit' className="bg-green-900 hover:bg-green-700 text-white my-3 px-5 rounded-lg p-3"><a href='mailto:xh3rking96@gmail.com'>Submit</a></button>
            </form>
            <p className='my-3 text-black'>Are you a software developer? That&apos;s even better.</p>
            <p className='my-3 text-black'>Fork the github repository using the below link, fix it yourself and submit a pull request</p>
            <p className='my-3 text-black'>You&apos;re submissions are highly welcomed</p>
            <a href='https://github.com/Jaarabytes/streamwan' className='text-green-900 font-bold' target='_blank'>https://github.com/Jaarabytes/streamwan</a>
            <p className='my-3 text-black'>You can also raise issues or any complaints here: </p>
            <a href='https://github.com/Jaarabytes/streamwan/issues' className='text-green-900 font-bold' target='_blank'>https://github.com/Jaarabytes/streamwan/issues</a>
            <hr />
        </>
        )
}
