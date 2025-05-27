import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Event Information | Kabserve",
    description: "Your hotstop for student organizations in CvSU.",
};

export default function EventsInfoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
