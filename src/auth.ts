import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { prisma } from "./lib"
import { authConfig } from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({

    pages: {
        signIn: '/auth/login',
    },
    
    adapter: PrismaAdapter(prisma),

    

    //? FOR CREDENTIALS
    session: {
        strategy: 'jwt',
        maxAge: 2592000 // 30 dias
    },
    ...authConfig
})

