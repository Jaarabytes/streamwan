import Sidenav from "@/app/ui/dashboard/Sidenav"

export default function Layout ({ children }: {children : React.ReactNode} ) {
    return (
        <>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <Sidenav />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                    {children}
                </div>
            </div>
        </>
    )
}
