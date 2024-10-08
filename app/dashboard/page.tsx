import Packages from "@/app/ui/dashboard/Packages"
import { fetchMail, getSession } from "@/lib/actions"
export default async function WelcomePage () {
  const id = await getSession();
  const mail = await fetchMail(id);
    return (
        <>
            <div>
                <h1 className="text-green-900 font-bold text-3xl p-5">Welcome , {mail} </h1>
                   <>
                    <h1 className="text-green-900 font-bold text-xl px-5">Choose wisely</h1>
                    <Packages />
                   </>
            </div>
        </>
    )
}
