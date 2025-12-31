import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Store the Google ID token on sign in
      if (account?.id_token) {
        token.idToken = account.id_token
      }
      if (user) {
        token.userId = user.id
      }
      return token
    },
    async session({ session, token }) {
      // Add user ID and Google ID token to session
      if (session.user) {
        session.user.id = token.userId as string
      }
      // Pass the Google ID token to the session
      session.idToken = token.idToken as string
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
})