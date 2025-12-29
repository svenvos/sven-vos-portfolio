import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700", "900"],
    variable: "--font-poppins"
});

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sven Vos - Full Stack Developer",
    description: "My portfolio website showcasing my skills and projects"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`antialiased ${inter.className} ${poppins.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
