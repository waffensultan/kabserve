import { Metadata } from "next";

import Background from "@/components/background";

export const metadata: Metadata = {
    title: "Kabserve | Continue As",
    description: "Your hotstop for student organizations in CvSU.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Background />
            {children}
        </>
    );
}
