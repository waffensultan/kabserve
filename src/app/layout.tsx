import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Kabserve",
    description: "Your hotstop for student organizations in CvSU.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="h-screen overflow-auto flex flex-col justify-between">
                <Header />
                <main className="px-5 md:px-10 lg:px-29 xl:px-43 flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
