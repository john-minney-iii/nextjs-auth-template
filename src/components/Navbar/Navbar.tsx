"use client"
import { type FC, useState } from "react";
import "@/styles/navbar.css";

// NextAuth
import { useSession, signIn, signOut } from "next-auth/react";

// Components
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar: FC = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className="navbar">
                <p>Navbar</p>
                <div className="flex items-center justify-center md:hidden">
                    <button type="button" aria-label="Open Navbar" onClick={() => setIsOpen(!isOpen)}>
                        <RxHamburgerMenu size={24} />
                    </button>
                </div>
                <div className="hidden md:flex">
                    {
                        session ? (
                            <button onClick={() => signOut()}>Logout</button>
                        ) : (
                            <button onClick={() => signIn()}>Login</button>
                        )
                    }
                </div>
            </div>
            {
                isOpen ? (
                    <div className="w-full border-b border-black py-10">
                        {
                            session ? (
                                <button onClick={() => signOut()}>Logout</button>
                            ) : (
                                <button onClick={() => signIn()}>Login</button>
                            )
                        }
                    </div>
                ) : null
            }
        </>
    );
};

export default Navbar;
