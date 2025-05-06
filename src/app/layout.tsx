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
            <body>{children}</body>
        </html>
    );
}
