"use client"
import type { FC } from "react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export type NextAuthProviderProps = {
    children: React.ReactNode;
    session: Session | null;
};

const NextAuthProvider: FC<NextAuthProviderProps> = ({ children, session }) => {
    return <SessionProvider session={session}>{children}</SessionProvider>
};

export default NextAuthProvider;
