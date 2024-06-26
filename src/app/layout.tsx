import { Metadata } from "next";
import "./globals.css"


import { Gilroy } from "@/config";
import { Providers } from "@/modules/shared";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className={Gilroy.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}




export const metadata: Metadata = {
    title: "Next POS",
    description: "Generated by create next app",
};
