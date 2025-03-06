"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center mb-4">Home</h1>
            <button onClick={() => signIn()} className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign in</button>
        <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded-md">Sign out</button>

        {session && (
          <div className="flex flex-col items-center justify-center">
            <p className="text-center mt-4 text-2xl font-bold text-blue-500">{session?.user?.name}</p>
            <p className="text-center mt-4 text-2xl font-bold text-blue-500">{session?.user?.email}</p>

            <img src={session?.user?.image || ""} alt="Profile" width={100} height={100} className="rounded-full" />
          </div>
          )}
        </div>
    )
}
