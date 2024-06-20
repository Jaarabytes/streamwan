import { getUser } from "@/app/lib/data"

export default function ProfilePage () {
    return (
            <>
            <h1 className="text-green-900 font-bold text-2xl">Hello insertEmailHERE</h1>
            <p className="text-green-900">We thank you for using our services and being a content customer</p>
            <div className="my-5">
                <p className="mt-10 mb-3">Any complaints?</p>
                <textarea placeholder="Submit them here (be as short as possible)"
                className="border-none w-96 h-72"></textarea>
            </div>
             <button className="bg-green-900 hover:bg-green-700 text-white my-5 rounded-lg p-3">Submit</button>
        </>
        )
}