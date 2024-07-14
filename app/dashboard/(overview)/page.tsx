import Packages from "@/app/ui/dashboard/Packages"
export default async function WelcomePage () {
    // This is the dashboard page
    // Show them to pay
    // Redesign db such that it remembers users packages and if they have paid or not
    // Add stripe, daraja and metamask payment options
    return (
        <>
            <div>
                <h1 className="text-green-900 font-bold text-3xl p-5">Welcome ,  </h1>
                {/* Check if user has paid */}
                <h1 className="text-green-900 font-bold text-xl px-5">Choose wisely</h1>
                <Packages />
            </div>
        </>
    )
}
