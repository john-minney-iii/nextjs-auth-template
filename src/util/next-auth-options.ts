import type { AuthOptions } from "next-auth";

// Providers
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET || "",
    }),
    Auth0Provider({
      clientId: process.env.NEXTAUTH_AUTH0_CLIENT_ID || "",
      clientSecret: process.env.NEXTAUTH_AUTH0_SECRET || "",
      issuer: process.env.NEXTAUTH_AUTH0_ISSUER,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "",
  session: { strategy: "jwt" },
};

export default authOptions;
