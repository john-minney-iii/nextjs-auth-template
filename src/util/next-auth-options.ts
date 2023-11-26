import type { AuthOptions } from "next-auth";

// Providers
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "",
  session: { strategy: "jwt" },
};

export default authOptions;
