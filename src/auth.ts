import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"

import { prisma } from "./lib"
import { loginWithEmailAndPassword } from "./modules/auth"


export const { handlers, signIn, signOut, auth } = NextAuth({

    pages: {
        signIn: '/auth/signin',
    },

    adapter: PrismaAdapter(prisma),

    providers: [
        Credentials({
            credentials: {
                email: { type: "email" },
                password: {},
            },

            authorize: async (credentials) => {
                let user = null

                user = await loginWithEmailAndPassword(credentials.email as string, credentials.password as string)
                console.log(user)
                return user
            },
        }),
    ],
    //? FOR CREDENTIALS
    session: {
        strategy: 'jwt',
    },

    callbacks: {
        //? MANEJA EL INICIO DE SESION: MANEJO DE ROLES - BLOQUEO DE USUARIOS
        async signIn({ user }) {
            console.log(user)
            return true;
        },

        //? MENEJA LA INFO DEL TOKEN
        // async jwt({ token, user, account }) {
        //     const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' } });
        //     token.id = dbUser?.id!

        //     return token;
        // },

        //? MENEJA LA INFORMACION DE LA SESSION
        // async session({ session, token, user }: any) {
        //     console.log({session})
        //     if (session && session.user) {
        //         session.user.id = token.id;
        //     }

        //     return session
        // }
    }
})

