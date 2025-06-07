import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Announcements | Kabserve",
    description: "Your hotstop for student organizations in CvSU.",
};

export default function AnnouncementsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
