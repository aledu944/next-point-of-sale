import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"

import { prisma } from "./lib"
import { validateUserCredentials } from "./modules/auth"


export const { handlers, signIn, signOut, auth } = NextAuth({

    pages: {
        signIn: '/auth/login',
    },
    
    adapter: PrismaAdapter(prisma),

    providers: [
        Credentials({
            name: "Credrentials",
            credentials: {
                email: {},
                password: {},
            },

            authorize: async (credentials) => {

                const user = await validateUserCredentials(credentials.email as string, credentials.password as string)

                if (!user) {
                    throw new Error("User not found.")
                }

                return user
            },
        }),
    ],

    //? FOR CREDENTIALS
    session: {
        strategy: 'jwt',
        maxAge: 2592000 // 30 dias
    },
})

