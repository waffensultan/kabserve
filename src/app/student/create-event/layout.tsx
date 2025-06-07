import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kabserve | Create Event",
    description: "Your hotstop for student organizations in CvSU.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
