import Link from "next/link"
import { logOut } from "@/lib/actions";
import { DocumentDuplicateIcon, GiftIcon, HomeIcon, PowerIcon, UserGroupIcon, WifiIcon } from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";

export default async function Sidenav () {
    const links = [
        { name: 'Home', href: '/dashboard', icon:  HomeIcon},
        {
          name: 'Payments',
          href: '/dashboard/payments',
          icon: DocumentDuplicateIcon,
        },
        { name: 'Profile', href: '/dashboard/profile', icon: UserGroupIcon},
        { name: "Donate", href: '/dashboard/donate', icon: GiftIcon }
      ];
    return (
        <>
            <div className="h-full flex flex-col px-3 py-4 md:px-2 bg-white">
                <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-900 p-4 md:h-40" href="/">
                <WifiIcon className='text-white h-12 w-12'/>
                </Link>
                <div className="flex grow justify-between flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                    {links.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-900 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
                        >
                            <LinkIcon className='h-6 w-6 inline' />
                            <p className="hidden md:block">{link.name}</p>
                        </Link>
                        );
                    })}
                    <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                    <form action={async () => { 
                    'use server'
                    await logOut()
                    redirect('/')
                    }}>
                        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 
                        rounded-md bg-gray-50 p-3 text-sm text-black font-medium hover:bg-red-600 hover:text-green-100 md:flex-none md:justify-start md:p-2 md:px-3">
                            <PowerIcon className="h-6 w-6" />
                            <div className="hidden md:block">Sign Out</div>
                        </button>
                    </form>
                </div>
            </div>  

        </>
    )
}
