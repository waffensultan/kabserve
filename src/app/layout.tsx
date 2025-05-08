import Header from "@/components/ui/header";

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
            <body>
                <Header />
                <main className="px-10 lg:px-29 xl:px-43">{children}</main>
            </body>
        </html>
    );
}
