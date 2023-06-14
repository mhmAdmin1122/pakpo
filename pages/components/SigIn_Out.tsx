import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import { useState } from "react";

export default function SigIn_Out() {
    const { data: session } = useSession();
    const [active, setActive] = useState(false)

    const handleClick = (event: any) => {
        setActive(current => !current);
    };

    if (session) {
        return <>
            {/* Signed in as {session.user.email} <br /> */}
            {/* Signed in as {session.user.image} <br /> */}
            {/* <img src={session.user.image} alt="user-pic" /> */}
            <div className="userPic-Box relative" onClick={handleClick}>
                <Image src={`${session.user?.image}`} alt={`${session.user?.name}`} width={40} height={40} title={`${session.user?.name}`} className="cursor-pointer rounded-full" />
                {active && <div className="grid justify-items-center absolute z-20 top-12 -left-56 rounded-md bg-green-700 text-white px-6 py-4">
                    <button className="flex items-center bg-slate-200 overflow-hidden rounded-lg text-gray-700 cursor-context-menu">
                        <Image src={`${session.user?.image}`} alt={`${session.user?.name}`} width={50} height={50} title={`${session.user?.name}`} className="cursor-pointer" />
                        <b className="px-2">{session.user?.name}</b>
                    </button>
                    <b className="mt-2">{session.user?.email}</b>
                    <button onClick={() => signOut()} className="bg-slate-300 text-black px-4 py-2 rounded-md mt-2 font-bold hover:bg-blue-700 hover:text-white transition-all duration-1000 ease-in-out" title={`Sign Out from ${session.user?.name}`}>Sign out</button>
                </div>}
            </div>
        </>
    }
    return (
        <>
            <button onClick={() => signIn('google')} className='bg-green-800 text-white px-4 py-2 rounded-md'>Sign in</button>
        </>
    )
}