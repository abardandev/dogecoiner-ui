import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: process.env.AUTH_TRUST_HOST == "true",
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // On initial sign in, add extra claims from Google
      if (account && profile) {
        token.providerSub = profile.sub; // provider's user ID
        token.firstName = profile.given_name;
        token.lastName = profile.family_name;

        // Store the provider info
        token.provider = account.provider;
        token.providerAccountId = account.providerAccountId;
      }
      return token
    },
    async session({ session, token }) {
      // Add custom claims to the session
      if (session.user) {
        session.user.id = token.sub as string
        session.user.providerSub = token.providerSub as string
        session.user.firstName = token.firstName as string
        session.user.lastName = token.lastName as string
        session.user.provider = token.provider as string
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});