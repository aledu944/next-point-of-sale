import type { NextAuthConfig } from "next-auth"

import Credentials from 'next-auth/providers/credentials';
import { validateUserCredentials } from "./modules/auth";

export const authConfig =  {
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
} satisfies NextAuthConfig