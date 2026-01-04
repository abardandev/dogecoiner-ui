import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      providerSub?: string
      firstName?: string
      lastName?: string
      provider?: string
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    providerSub?: string
    firstName?: string
    lastName?: string
    provider?: string
  }
}