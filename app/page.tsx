"use client"
import type { FC } from "react";

// NextAuth
import { useSession, signIn, signOut } from "next-auth/react";

const HomePage: FC = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-y-10">
      <p>{session ? "You are logged in" : "You aren't logged in"}</p>
      {
        session ? (
          <button
            onClick={() => signOut()}
            className="py-3 px-4 rounded-lg bg-red-500 text-white"
          >Log Out</button>
        ) : (
          <button
            onClick={() => signIn()}
            className="py-3 px-4 rounded-lg bg-green-500 text-white"
          >LogIn</button>
        )
      }
    </div>
  );
};

export default HomePage;
