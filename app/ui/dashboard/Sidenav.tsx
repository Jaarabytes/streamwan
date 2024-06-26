import Link from "next/link"
import { FaRegUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoCashOutline } from "react-icons/io5";
import clsx from "clsx";
import { FaPowerOff } from "react-icons/fa";
export default function Sidenav () {
    const links = [
        { name: 'Home', href: '/dashboard', icon:  FaHome},
        {
          name: 'Payments',
          href: '/dashboard/payments',
          icon: IoCashOutline,
        },
        { name: 'Profile', href: '/dashboard/profile', icon: FaRegUserCircle},
      ];
    return (
        <>
            <div className="h-full flex flex-col px-3 py-4 md:px-2 bg-white">
                <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-900 p-4 md:h-40" href="/">
                </Link>
                <div className="flex grow justify-between flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                    {links.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-900 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                "text-black": link.href,
                            },
                            )}
                        >
                            <LinkIcon className='text-xl inline' />
                            <p className="hidden md:block">{link.name}</p>
                        </Link>
                        );
                    })}
                    <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                    <form action={async () => { 
                    'use server'
                    }}>
                        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 
                        rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-600 hover:text-green-100 md:flex-none md:justify-start md:p-2 md:px-3">
                            <FaPowerOff className="text-xl" />
                            <div className="hidden md:block">Sign Out</div>
                        </button>
                    </form>
                </div>
            </div>  

        </>
    )
}
